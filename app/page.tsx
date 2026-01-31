"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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

// Sleek SVG Icons
const CalendarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="5" width="14" height="14" rx="2" />
    <path d="M16 10l5-3v10l-5-3V10z" />
  </svg>
);

export default function Home() {
  // Parallax effect for hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <section ref={heroRef} className="relative min-h-dvh overflow-hidden">
        {/* Parallax hero image */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: imageY,
            scale: imageScale,
          }}
        >
        <motion.div initial="hidden" animate="visible" variants={heroImage}>
          <Image
              src="/images/max-bender-azfAz8OvLgs-unsplash.jpg"
              alt="Community gathering"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          </motion.div>
        </motion.div>

        {/* Balanced dark overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, rgba(11, 13, 18, 0.6) 0%, rgba(11, 13, 18, 0.55) 40%, rgba(11, 13, 18, 0.8) 100%)',
            opacity: overlayOpacity
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden
        />

        {/* Header - positioned below navbar space */}
        <NavHeader sticky={true} />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl items-end px-6 pb-16 pt-40 sm:pb-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.p
              className="text-xs tracking-[0.25em] uppercase text-paper/60 font-medium"
              variants={fadeInUp}
            >
              Psychologists for Racial Justice
            </motion.p>

            <motion.h1
              className="text-display mt-8 text-4xl leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              Advancing equity through{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                psychology & action.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-paper/70 max-w-xl leading-relaxed"
              variants={fadeInUp}
            >
              We unite mental health professionals committed to dismantling systemic racism and fostering a more just world.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              variants={staggerItem}
            >
              <Link
                href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-paper rounded-full transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
              >
                Make a donation
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold text-paper border border-paper/30 rounded-full transition-all duration-200 hover:bg-paper/10"
              >
                Learn more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-paper text-ink py-24 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/jon-tyson-9eHLHK_vP9s-unsplash.jpg"
                  alt="Recognize your own white privilege sign"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                </div>
              {/* Decorative gradient accent */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10"
                style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="lg:pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.15)}
            >
              <motion.p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: '#c94b6d' }}
                variants={fadeInUp}
              >
                Our Vision
              </motion.p>
              
              <motion.h2
                className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
                variants={revealText}
              >
                A More Equitable And{" "}
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Inclusive World
                </span>
              </motion.h2>

              <motion.p
                className="mt-8 text-lg leading-relaxed text-ink/70 max-w-xl"
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

              <motion.div className="mt-10" variants={scaleIn}>
                <Link
                  href="#about"
                  className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-paper rounded-full transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
                >
                  Learn More
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="bg-ink text-paper py-24 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Label */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium"
                style={{ color: '#e07a4d' }}
              >
                Our Mission
              </p>
              <div 
                className="mt-4 w-12 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }}
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="lg:col-span-9"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.2)}
            >
              <div className="space-y-12">
                <motion.div variants={revealText}>
                  <h3 
                    className="text-2xl font-semibold mb-6"
                    style={{ 
                      background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Who We Are
                  </h3>
                  <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-paper/80 font-light">
                  PRJ is dedicated to advancing racial equity and social justice
                  through research, education, and community engagement. Our
                  mission is to conduct research, provide professional
                  development opportunities, and develop and share resources
                  that promote continued awareness of racism and its
                  consequences while actively working towards a more racially
                  inclusive and equitable field of psychology and society.
                  </p>
                </motion.div>

                <motion.p
                  className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-paper/80 font-light border-l-2 pl-8"
                  style={{ borderColor: '#c94b6d' }}
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
      <section className="bg-paper text-ink py-24 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.2)}
          >
            {/* Left: Heading */}
            <motion.div variants={fadeInLeft}>
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: '#c94b6d' }}
              >
                Our Approach
              </p>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Taking pride in{" "}
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  commitment
                </span>
              </h2>
            </motion.div>

            {/* Right: Content */}
            <motion.div className="space-y-8" variants={fadeInRight}>
              <p className="text-lg leading-relaxed text-ink/70">
                Our work focuses on centering BIPOC experiences and promoting
                racial justice through multiple avenues of action and support.
                Every day, our work contributes to the advancement of human
                rights and mental health access.
              </p>

              <p className="text-lg leading-relaxed text-ink/70">
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
        className="bg-surface text-ink py-24 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6">
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
            What We Do
            </p>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Four pillars of{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                impact
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainerFast}
          >
            {/* Education Card */}
            <motion.div
              className="group"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/shalom-ejiofor-t9MnT32BkRc-unsplash.jpg"
                  alt="Education session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <div 
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
                >
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Education</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                    Educate mental health professionals on racial justice and
                    anti-racism practices through workshops, training, and
                    resources.
                  </p>
            </motion.div>

            {/* Healing Spaces Card */}
            <motion.div
              className="group"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/jay-castor-7AcMUSYRZpU-unsplash.jpg"
                  alt="Healing spaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <div 
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #c94b6d, #a4c639)' }}
                >
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Healing Spaces</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                    Create healing spaces for BIPOC communities to process
                    racial trauma and find community support and solidarity.
                  </p>
            </motion.div>

            {/* Events Card */}
            <motion.div
              className="group"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/christina-wocintechchat-com-m-rg1y72eKw6o-unsplash.jpg"
                  alt="Events and gatherings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <div 
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #a4c639, #e07a4d)' }}
                >
                  03
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Events</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                    Host virtual and in-person events focused on racial justice,
                    mental health equity, and systemic change.
                  </p>
            </motion.div>

            {/* Advocacy Card */}
            <motion.div
              className="group"
              variants={slideInFromBottom}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/timothy-dykes-UbW4o7qRhVk-unsplash.jpg"
                  alt="Advocacy and activism"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/20" />
                <div 
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
                >
                  04
                </div>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Advocacy</h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                    Provide resources and support for activism and advocacy to
                    challenge oppressive systems and promote equity.
                  </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="bg-ink text-paper py-24 sm:py-36">
        <div className="mx-auto max-w-7xl px-6">
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
              Upcoming Events
            </p>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-paper">
              Join us for our{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                next event
              </span>
            </h2>
          </motion.div>

          {/* Featured Event Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <Link href="/event/healing-while-harmed-2026" className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center">
                {/* Left: Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/faith-esele-V190dZavyL4-unsplash.jpg"
                      alt="Racism is a Public Health Crisis"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {/* Date Badge */}
                    <div 
                      className="absolute top-5 left-5 px-4 py-3 rounded-xl text-center"
                      style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
                    >
                      <div className="text-2xl font-bold text-paper leading-none">13</div>
                      <div className="text-[10px] uppercase tracking-wider text-paper/80 mt-1">Mar 2026</div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-7 py-8 lg:py-0">
                  <div className="flex items-center gap-3 mb-5">
                    <span 
                      className="px-3 py-1.5 text-xs font-medium tracking-wide uppercase"
                      style={{ color: '#c94b6d', borderLeft: '2px solid #c94b6d' }}
                    >
                      Virtual Conference
                    </span>
                    <span className="text-paper/40 text-xs tracking-wide">3rd Annual</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-semibold text-paper mb-3 tracking-tight">
                    Healing While Harmed
                  </h3>
                  <p 
                    className="text-lg font-medium mb-5"
                    style={{ 
                      background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Racism in Mental Health Systems and Healthcare
                  </p>

                  <p className="text-paper/50 leading-relaxed mb-8 max-w-lg">
                    Join us as we explore the complex intersections of racism, healthcare, 
                    and mental health. This conference will provide a critical platform for 
                    understanding how systemic racism operates within healthcare delivery and 
                    strategies to transform these systems.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-paper/40 mb-8">
                    <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span>Friday, March 13, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon />
                      <span>10:00 AM - 4:00 PM EDT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <VideoIcon />
                      <span>Zoom Webinar</span>
                    </div>
                  </div>

                  <div 
                    className="inline-flex items-center gap-2 text-paper font-medium group-hover:gap-3 transition-all"
                    style={{ borderBottom: '1px solid rgba(224, 122, 77, 0.5)' }}
                  >
                    <span>Learn more & Register</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        {/* Section Divider */}
        <div className="mx-auto max-w-7xl px-6 pt-24">
          <div 
            className="h-px"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(224, 122, 77, 0.4) 25%, rgba(201, 75, 109, 0.4) 50%, rgba(164, 198, 57, 0.4) 75%, transparent 100%)' }}
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="bg-ink text-paper pt-24 pb-24 sm:pt-36 sm:pb-36 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: 'radial-gradient(ellipse at 20% 80%, rgba(224, 122, 77, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201, 75, 109, 0.15) 0%, transparent 50%)'
          }}
        />
        
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Section Header - Centered */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <p 
              className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
              style={{ color: '#e07a4d' }}
            >
              Our Team
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight text-paper">
              The{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                people
              </span>{" "}
              behind our mission
            </h2>
          </motion.div>

          {/* Team Grid - 3x3 */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-10 sm:gap-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainerFast}
          >
            {[
              { name: "Carlton Green, PhD", image: "/images/team/CEG_Branding2019-14 (1).jpg" },
              { name: "Maryam Jernigan-Noesi, MED, PhD", image: "/images/team/Copy of image_6483441.JPG" },
              { name: "Leyla Perez-Gualdron", image: "/images/team/leyla.perezgualdron-11 (1).jpg" },
              { name: "Marcia Liu, PhD", image: "/images/team/Marcia-Lui.png" },
              { name: "Cynthia Chen, PhD", image: "/images/team/Cyn Chen.jpg" },
              { name: "Janet Helms, PhD", image: "/images/team/Helms.Distinguished.jpeg" },
              { name: "Kevin Henze, PhD", image: "/images/team/Henze-small-headshot.jpg" },
              { name: "Kisha Bazelais, PhD", image: "/images/team/Kisha Bazelais.jpg" },
              { name: "Anmol Satiani, PhD", image: "/images/team/Anmol Satiani.jpg" },
            ].map((member, index) => (
            <motion.div
                key={member.name}
                className="group text-center"
              variants={slideInFromBottom}
            >
                {/* Square image */}
                <div className="relative mx-auto aspect-square w-full max-w-[200px] mb-5 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, 200px"
                  />
                </div>
                
                {/* Name with gradient underline on hover */}
                <div className="relative inline-block">
                  <h4 className="text-sm sm:text-base font-medium text-paper/90 group-hover:text-paper transition-colors">
                    {member.name}
                  </h4>
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, #e07a4d, #c94b6d, transparent)' }}
                  />
                </div>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-surface py-24 sm:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            className="bg-ink text-paper rounded-3xl p-8 sm:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <div className="text-center mb-10">
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: '#e07a4d' }}
              >
                Contact
              </p>
              <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                Get in{" "}
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  touch
                </span>
              </h2>
              <p className="text-paper/50 max-w-md mx-auto text-sm">
                Questions about our work or how to get involved? We&apos;d love to hear from you.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-5 py-3.5 bg-paper/5 border border-paper/10 rounded-xl text-paper placeholder:text-paper/30 focus:outline-none focus:border-paper/25 transition-all text-sm"
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-5 py-3.5 bg-paper/5 border border-paper/10 rounded-xl text-paper placeholder:text-paper/30 focus:outline-none focus:border-paper/25 transition-all text-sm"
                  placeholder="Last name"
                />
              </div>

              <input
                type="email"
                name="email"
                className="w-full px-5 py-3.5 bg-paper/5 border border-paper/10 rounded-xl text-paper placeholder:text-paper/30 focus:outline-none focus:border-paper/25 transition-all text-sm"
                placeholder="Email address"
              />

              <textarea
                name="message"
                rows={4}
                className="w-full px-5 py-3.5 bg-paper/5 border border-paper/10 rounded-xl text-paper placeholder:text-paper/30 focus:outline-none focus:border-paper/25 transition-all resize-none text-sm"
                placeholder="Your message"
              />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <p className="text-xs text-paper/40">
                  Or email{" "}
                  <a 
                    href="mailto:contact@psychforracialjustice.org" 
                    className="hover:text-paper transition-colors"
                    style={{ color: '#e07a4d' }}
                  >
                    contact@psychforracialjustice.org
                  </a>
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
                >
                  Send
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            </form>
          </motion.div>
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
                  Join Us
                </p>
                <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                  Ready to help us on{" "}
                  <span 
                    style={{ 
                      background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    our mission
                  </span>?
                </h2>
                <p className="text-paper/50 text-sm leading-relaxed">
                  Join our community of psychologists and mental health professionals committed to advancing racial justice.
                </p>
                      </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
                >
                  Donate
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
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
                      href="#events"
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
