"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../components/brand/Button";
import { NavHeader } from "../components/brand/NavHeader";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  heroImage,
  revealText,
  viewport,
  viewportEarly,
  slideInFromBottom,
  staggerContainerFast,
  imageZoom,
} from "../lib/animations";

function HeadlineBar({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline px-2 py-1 text-paper bg-ink sm:px-3 sm:py-1.5 leading-[1.2]"
      style={{
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <section className="relative min-h-dvh">
        <motion.div initial="hidden" animate="visible" variants={heroImage}>
          <Image
            src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
            alt="Community gathering with a speaker holding a megaphone"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Readability scrim (flat, no gradients) */}
        <motion.div
          className="absolute inset-0 bg-ink/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden
        />

        {/* Header overlay */}
        <motion.div
          className="absolute left-0 right-0 top-0 z-20 pt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <NavHeader sticky={true} tone="dark" glass />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl items-end px-6 pb-16 pt-28 sm:pb-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.p
              className="text-xs tracking-[0.16em] uppercase text-paper/70"
              variants={fadeInUp}
            >
              Amplifying Voices
            </motion.p>

            <motion.h1
              className="text-display mt-5 text-4xl leading-[1.5] tracking-tight sm:text-6xl sm:leading-[1.5]"
              variants={fadeInUp}
            >
              <HeadlineBar>
                We help make racial justice a reality for those who need it
                most.
              </HeadlineBar>
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              variants={staggerItem}
            >
              <Button
                variant="secondary"
                className="bg-paper text-ink border-paper/30 hover:bg-paper/95"
                rightIcon={<span aria-hidden>→</span>}
              >
                Make a donation
              </Button>
              <Link href="/brand">
                <Button
                  variant="ghost"
                  className="text-paper hover:bg-paper/10 active:bg-paper/12"
                >
                  Get Involved
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden">
                <Image
                  src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                  alt="Smiling woman in striped top"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Curved text overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 600">
                    <path
                      id="curve"
                      d="M 200,150 A 150,150 0 0,1 350,300"
                      fill="transparent"
                    />
                    <text className="text-[14px] fill-paper/70 tracking-[0.2em]">
                      <textPath href="#curve" startOffset="0%">
                        your gateway to engagement with...
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="lg:pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.15)}
            >
              <motion.h2
                className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
                variants={revealText}
              >
                A More Equitable And Inclusive World
              </motion.h2>

              <motion.p
                className="mt-6 text-base sm:text-lg leading-relaxed text-ink/90 max-w-xl"
                variants={revealText}
              >
                At Psychologists for Racial Justice (PRJ), our mission and
                vision guide us in our commitment to dismantling systemic
                racism, promoting racial justice, and fostering a more equitable
                and inclusive world. Together, we work towards a future where
                psychology serves as a catalyst for positive social change and
                where the impacts of racism are mitigated, leading to a brighter
                and racially just future for everyone.
              </motion.p>

              <motion.div className="mt-8" variants={scaleIn}>
                <Button
                  variant="primary"
                  className="bg-ground text-paper hover:bg-ground/90"
                  rightIcon={
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-paper text-ground text-sm">
                      →
                    </span>
                  }
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Label */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <h3 className="text-base font-normal text-ink">Our Mission</h3>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="lg:col-span-9"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.2)}
            >
              <div className="space-y-10">
                <motion.p
                  className="text-display text-3xl sm:text-4xl lg:text-5xl leading-snug font-normal"
                  variants={revealText}
                >
                  <span className="font-semibold">Who We Are</span>
                  <br />
                  PRJ is dedicated to advancing racial equity and social justice
                  through research, education, and community engagement. Our
                  mission is to conduct research, provide professional
                  development opportunities, and develop and share resources
                  that promote continued awareness of racism and its
                  consequences while actively working towards a more racially
                  inclusive and equitable field of psychology and society.
                </motion.p>

                <motion.p
                  className="text-display text-3xl sm:text-4xl lg:text-5xl leading-snug font-normal"
                  variants={revealText}
                >
                  We are committed to empowering underrepresented racial groups
                  by using psychology to foster collective healing through
                  resistance to racism.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.2)}
          >
            {/* Left: Heading */}
            <motion.div variants={fadeInLeft}>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
                Our Approach
              </h2>
            </motion.div>

            {/* Right: Content */}
            <motion.div className="space-y-6" variants={fadeInRight}>
              <h3 className="text-2xl font-semibold">
                Taking pride in commitment
              </h3>

              <p className="text-lg leading-relaxed text-ink/90">
                Our work focuses on centering BIPOC experiences and promoting
                racial justice through multiple avenues of action and support.
                Every day, our work contributes to the advancement of human
                rights and mental health access.
              </p>

              <p className="text-lg leading-relaxed text-ink/90">
                Learn more about our history of solidarity, cooperation, and
                commitment to making racial justice a reality for all
                communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        id="what-we-do"
        className="bg-paper text-ink py-20 sm:py-32 border-t border-ink/10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            What We Do
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainerFast}
          >
            {/* Education Card */}
            <motion.div
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              variants={slideInFromBottom}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={imageZoom}>
                <Image
                  src="/images/shalom-ejiofor-t9MnT32BkRc-unsplash.jpg"
                  alt="Education session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <h3 className="text-2xl font-semibold text-paper">Education</h3>
                <div>
                  <p className="text-sm text-paper/90 mb-4">
                    Educate mental health professionals on racial justice and
                    anti-racism practices through workshops, training, and
                    resources.
                  </p>
                  <button className="flex items-center gap-2 text-paper hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Healing Spaces Card */}
            <motion.div
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              variants={slideInFromBottom}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={imageZoom}>
                <Image
                  src="/images/jay-castor-7AcMUSYRZpU-unsplash.jpg"
                  alt="Healing spaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <h3 className="text-2xl font-semibold text-paper">
                  Healing Spaces
                </h3>
                <div>
                  <p className="text-sm text-paper/90 mb-4">
                    Create healing spaces for BIPOC communities to process
                    racial trauma and find community support and solidarity.
                  </p>
                  <button className="flex items-center gap-2 text-paper hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Events Card */}
            <motion.div
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              variants={slideInFromBottom}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={imageZoom}>
                <Image
                  src="/images/christina-wocintechchat-com-m-rg1y72eKw6o-unsplash.jpg"
                  alt="Events and gatherings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <h3 className="text-2xl font-semibold text-paper">Events</h3>
                <div>
                  <p className="text-sm text-paper/90 mb-4">
                    Host virtual and in-person events focused on racial justice,
                    mental health equity, and systemic change.
                  </p>
                  <button className="flex items-center gap-2 text-paper hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Advocacy Card */}
            <motion.div
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
              variants={slideInFromBottom}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={imageZoom}>
                <Image
                  src="/images/timothy-dykes-UbW4o7qRhVk-unsplash.jpg"
                  alt="Advocacy and activism"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <h3 className="text-2xl font-semibold text-paper">Advocacy</h3>
                <div>
                  <p className="text-sm text-paper/90 mb-4">
                    Provide resources and support for activism and advocacy to
                    challenge oppressive systems and promote equity.
                  </p>
                  <button className="flex items-center gap-2 text-paper hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            Upcoming events
          </motion.h2>

          {/* Category Pill */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            <button className="px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-paper transition-colors">
              Climbing Adventures
            </button>
          </motion.div>

          {/* Events List */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.15)}
          >
            {/* Event 1: Dolomites */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-b border-ink/10"
              variants={fadeInLeft}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Date Box */}
                <div className="text-center border-2 border-accent rounded-lg p-4 min-w-[120px]">
                  <div className="text-sm uppercase tracking-wide text-accent">
                    Mon
                  </div>
                  <div className="text-4xl font-bold text-accent">22</div>
                  <div className="text-sm text-accent">Jun 2026</div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Dolomites</h3>
                  <p className="text-lg text-ink/70 mb-1">June 22-26, 2026</p>
                  <p className="text-xl font-semibold">$3000</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 rounded-full border-2 border-ground text-ground hover:bg-ground hover:text-paper transition-colors whitespace-nowrap">
                Save my spot
              </button>
            </motion.div>

            {/* Event 2: Machu Picchu */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-b border-ink/10"
              variants={fadeInLeft}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Date Box */}
                <div className="text-center border-2 border-accent rounded-lg p-4 min-w-[120px]">
                  <div className="text-sm uppercase tracking-wide text-accent">
                    Sat
                  </div>
                  <div className="text-4xl font-bold text-accent">04</div>
                  <div className="text-sm text-accent">Jul 2026</div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Machu Picchu</h3>
                  <p className="text-lg text-ink/70 mb-1">July 4-10, 2026</p>
                  <p className="text-xl font-semibold">$3,300</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 rounded-full border-2 border-ground text-ground hover:bg-ground hover:text-paper transition-colors whitespace-nowrap">
                Save my spot
              </button>
            </motion.div>

            {/* Event 3: Mt Whitney to Death Valley */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-b border-ink/10"
              variants={fadeInLeft}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Date Box */}
                <div className="text-center border-2 border-accent rounded-lg p-4 min-w-[120px]">
                  <div className="text-sm uppercase tracking-wide text-accent">
                    Sun
                  </div>
                  <div className="text-4xl font-bold text-accent">11</div>
                  <div className="text-sm text-accent">Oct 2026</div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Mt Whitney to Death Valley
                  </h3>
                  <p className="text-lg text-ink/70 mb-1">11-16 October 2026</p>
                  <p className="text-xl font-semibold">$2200</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 rounded-full border-2 border-ground text-ground hover:bg-ground hover:text-paper transition-colors whitespace-nowrap">
                Save my spot
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Looking to attend */}
      <section className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="relative rounded-[4rem] overflow-hidden min-h-[500px] sm:min-h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            {/* Background Image */}
            <Image
              src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
              alt="Portrait"
              fill
              className="object-cover"
              sizes="100vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative h-full flex items-center px-8 sm:px-16 py-16">
              <motion.div
                className="max-w-2xl"
                variants={staggerContainer(0.2)}
              >
                <motion.h2
                  className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 text-ink"
                  variants={fadeInUp}
                >
                  <span className="inline-block px-3 py-1 mb-2 bg-paper">
                    Looking to attend an
                  </span>
                  <br />
                  <span className="inline-block px-3 py-1 bg-paper">
                    exhibition?
                  </span>
                </motion.h2>

                <motion.div variants={scaleIn}>
                  <Button
                    variant="secondary"
                    className="bg-paper text-accent hover:bg-paper/90"
                    rightIcon={
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent text-paper text-sm">
                        →
                      </span>
                    }
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.15)}
          >
            <motion.h2
              className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
              variants={fadeInUp}
            >
              Our Team
            </motion.h2>
            <motion.h3
              className="text-2xl font-semibold mb-4"
              variants={fadeInUp}
            >
              Meet Our Members
            </motion.h3>
            <motion.div
              className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/80"
              variants={fadeInUp}
            >
              <p>
                Our members are leading psychologists, counselors, and mental
                health researchers committed to advancing racial justice in
                their practices, institutions, and communities.
              </p>
              <p>
                Each member brings unique expertise and lived experience to our
                collective work, creating a powerful network of change agents
                across the mental health field.
              </p>
            </motion.div>
          </motion.div>

          {/* Team Grid - Single Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainerFast}
          >
            {/* Team Member 1 */}
            <motion.div
              className="group rounded-2xl overflow-hidden border border-border/50"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1 text-ink">
                  Dr. Sarah Johnson
                </h4>
                <p className="text-xs text-ink/50 mb-3 uppercase tracking-wider">
                  Co-Chair, Board of Trustees
                </p>
                <p className="text-sm text-ink/70 mb-4 leading-relaxed">
                  Clinical Psychologist specializing in trauma-informed care and
                  racial healing
                </p>
                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  Read Bio <span>→</span>
                </button>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="group rounded-2xl overflow-hidden border border-border/50"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                  alt="Dr. Marcus Williams"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1 text-ink">
                  Dr. Marcus Williams
                </h4>
                <p className="text-xs text-ink/50 mb-3 uppercase tracking-wider">
                  Director of Research
                </p>
                <p className="text-sm text-ink/70 mb-4 leading-relaxed">
                  Research psychologist focused on systemic racism and mental
                  health disparities
                </p>
                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  Read Bio <span>→</span>
                </button>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="group rounded-2xl overflow-hidden border border-border/50"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                  alt="Dr. Keisha Thompson"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1 text-ink">
                  Dr. Keisha Thompson
                </h4>
                <p className="text-xs text-ink/50 mb-3 uppercase tracking-wider">
                  Co-Chair, Board of Trustees
                </p>
                <p className="text-sm text-ink/70 mb-4 leading-relaxed">
                  Community psychologist and advocate for BIPOC mental health
                  equity
                </p>
                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  Read Bio <span>→</span>
                </button>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="group rounded-2xl overflow-hidden border border-border/50"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                  alt="Dr. James Chen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1 text-ink">
                  Dr. James Chen
                </h4>
                <p className="text-xs text-ink/50 mb-3 uppercase tracking-wider">
                  Vice Chair, Board of Trustees
                </p>
                <p className="text-sm text-ink/70 mb-4 leading-relaxed">
                  Licensed counselor specializing in multicultural counseling
                  and social justice
                </p>
                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  Read Bio <span>→</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Conference Section */}
      <section id="conference" className="bg-paper text-ink py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            Upcoming Conference
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.2)}
          >
            {/* Left: Conference Card */}
            <motion.div className="relative" variants={fadeInLeft}>
              <div className="bg-white rounded-3xl overflow-hidden border border-ink/10">
                {/* Date Badge */}
                <div className="absolute top-6 left-6 z-10 bg-paper rounded-2xl p-4 text-center border border-ink/10 min-w-[80px]">
                  <div className="text-4xl font-bold leading-none mb-1">15</div>
                  <div className="text-xs uppercase tracking-wider text-ink/70">
                    MAR
                  </div>
                </div>

                {/* Conference Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                    alt="Conference attendees"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-ink/20 text-sm font-medium">
                      Conference
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold mb-4">
                    2026 Annual Conference: Psychology as a Tool for Racial
                    Justice
                  </h3>

                  <div className="space-y-2 text-ink/70 mb-6">
                    <p>March 15-16, 2026</p>
                    <p>9:00 AM - 5:00 PM EST (Both Days)</p>
                    <p>Virtual & In-Person (Chicago, IL)</p>
                  </div>

                  <p className="text-ink/80 leading-relaxed mb-6">
                    Join leading psychologists, researchers, and advocates for
                    two days of transformative learning, networking, and
                    collective action toward racial justice in mental health.
                  </p>

                  <button className="flex items-center justify-center gap-2 w-12 h-12 rounded-full bg-ink text-paper hover:bg-ink/90 transition-colors">
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right: Schedule Highlights */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-3xl font-semibold mb-6">
                Conference Schedule Highlights
              </h3>
              <motion.div
                className="space-y-3"
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {/* Day 1 - Keynote */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 1
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Keynote
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Keynote: Advancing Anti-Racist Clinical Practices
                      </h4>
                      <p className="text-sm text-ink/70">Dr. Maya Johnson</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">9:00 AM - 10:30 AM</p>
                </motion.div>

                {/* Day 1 - Workshop */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 1
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Workshop
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Workshop: Culturally Responsive Assessment Tools
                      </h4>
                      <p className="text-sm text-ink/70">
                        Dr. James Washington & Dr. Anita Patel
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">11:00 AM - 12:30 PM</p>
                </motion.div>

                {/* Day 1 - Panel */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 1
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Panel Discussion
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Panel: Addressing Systemic Barriers in Mental Health
                      </h4>
                      <p className="text-sm text-ink/70">Multiple Speakers</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">2:00 PM - 3:30 PM</p>
                </motion.div>

                {/* Day 2 - Keynote */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 2
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Keynote
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Keynote: Community-Based Healing Approaches
                      </h4>
                      <p className="text-sm text-ink/70">Dr. Marcus Chen</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">9:00 AM - 10:30 AM</p>
                </motion.div>

                {/* Day 2 - Workshop */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 2
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Workshop
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Workshop: Implementing Anti-Racist Supervision
                      </h4>
                      <p className="text-sm text-ink/70">Dr. Lisa Rodriguez</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">11:00 AM - 12:30 PM</p>
                </motion.div>

                {/* Day 2 - Ceremony */}
                <motion.div
                  className="bg-white p-6 border-b border-ink/10"
                  variants={staggerItem}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Day 2
                        </span>
                        <span className="text-xs text-ink/40">•</span>
                        <span className="text-xs font-semibold text-ink/60 uppercase tracking-wider">
                          Ceremony
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">
                        Closing Ceremony: Commitment to Action
                      </h4>
                      <p className="text-sm text-ink/70">All Presenters</p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/60">3:30 PM - 5:00 PM</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-paper text-ink py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="relative bg-ink rounded-xl overflow-hidden py-20 px-8 sm:px-12 lg:px-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/katherine-hanlon-pNxzedQ5qyU-unsplash.jpg"
                alt="Background"
                fill
                className="object-cover opacity-30"
                sizes="100vw"
              />
            </div>
            <motion.div
              className="relative max-w-3xl"
              variants={staggerContainer(0.2)}
            >
              <motion.h2
                className="text-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6 text-paper"
                variants={fadeInUp}
              >
                <span className="inline-block px-3 py-1 mb-2 bg-paper text-ink">
                  Ready to help us on
                </span>
                <br />
                <span className="inline-block px-3 py-1 bg-paper text-ink">
                  our mission?
                </span>
              </motion.h2>
              <motion.div variants={scaleIn}>
                <Button
                  variant="secondary"
                  className="bg-paper text-ink hover:bg-paper/90"
                >
                  Become a member
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Wrapper */}
      <section className="bg-paper pt-20">
        <motion.footer
          className="bg-ink text-paper rounded-t-[4rem]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportEarly}
          variants={fadeInUp}
        >
          {/* Main Footer Content */}
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Logo and Contact - Left Column */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold mb-8 tracking-tighter leading-tight">
                  PSYCHOLOGISTS
                  <br />
                  FOR RACIAL
                  <br />
                  JUSTICE
                </h2>
                <div className="space-y-2 text-sm text-paper/60">
                  <p>123 Justice Avenue, Suite 200</p>
                  <p>Cambridge, MA 02138</p>
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <a
                      href="tel:617-555-0123"
                      className="text-paper/80 hover:text-paper transition-colors"
                    >
                      617-555-0123
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:contact@psychforracialjustice.org"
                      className="text-paper/80 hover:text-paper transition-colors"
                    >
                      contact@psychforracialjustice.org
                    </a>
                  </p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-3 mt-8">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-paper/5 hover:bg-paper/10 transition-colors text-paper/70 hover:text-paper text-sm"
                  >
                    <span className="sr-only">Facebook</span>f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-paper/5 hover:bg-paper/10 transition-colors text-paper/70 hover:text-paper text-sm"
                  >
                    <span className="sr-only">X</span>
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-paper/5 hover:bg-paper/10 transition-colors text-paper/70 hover:text-paper text-sm"
                  >
                    <span className="sr-only">Instagram</span>
                    IG
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-paper/5 hover:bg-paper/10 transition-colors text-paper/70 hover:text-paper text-sm"
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
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Our Mission
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Press
                    </a>
                  </nav>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">
                    Programs
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Education
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Events
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Resources
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Blog
                    </a>
                  </nav>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">
                    Support
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Donate
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Volunteer
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Partner
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
              </div>

              {/* Newsletter - Right Column */}
              <div className="lg:col-span-3">
                <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">
                  Stay Connected
                </h3>
                <p className="text-sm text-paper/70 mb-6 leading-relaxed">
                  Join our newsletter for updates on racial justice in mental
                  health.
                </p>
                <Button
                  variant="secondary"
                  className="bg-paper text-ink hover:bg-paper/90 w-full justify-center"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="text-xs text-paper/40">
                © 2026 Psychologists for Racial Justice. All rights reserved.
              </div>
              <div className="flex gap-8 text-xs">
                <a
                  href="#"
                  className="text-paper/50 hover:text-paper transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-paper/50 hover:text-paper transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-paper/50 hover:text-paper transition-colors"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </section>
    </main>
  );
}
