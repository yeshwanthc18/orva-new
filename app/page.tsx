"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { LampEffect } from "@/components/ui/LampEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip, RotateOnScroll } from "@/components/ui/ScrollAnimations";
import {
  COLORS,
  HERO_STATS,
  UNIVERSITY_MARQUEE,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
} from "@/lib/constants";

export default function Page() {
  useLenis();
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaScale = useTransform(ctaScroll, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <>
      <Cursor />
      <Trail />
      <Loader />
      <Navbar />
      <main>
        <Hero />

        {/* University Marquee */}
        <section className="relative" style={{ padding: "48px 0", background: COLORS.deepBlack, overflow: "hidden" }}>
          <InfiniteMovingCards
            items={UNIVERSITY_MARQUEE.map((uni) => ({
              content: (
                <span className="text-2xl md:text-3xl font-semibold text-white/80 tracking-tight whitespace-nowrap px-4">
                  {uni}
                </span>
              ),
            }))}
            direction="left"
            speed="slow"
            pauseOnHover
            className="max-w-none"
          />
        </section>

        {/* What We Do — Split with Image + Floating Geometry */}
        <section className="relative overflow-hidden noise-bg" style={{ background: COLORS.deepBlack }}>
          <FloatingGeometry variant="dark" density="normal" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left — Content */}
            <div className="px-8 md:px-16 py-20 md:py-32 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: COLORS.primary }}
              >
                What We Do
              </motion.div>

              <TextGenerateEffect
                words="The right university. The right major. The right future."
                className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight mb-8"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-base md:text-lg leading-relaxed mb-10"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                ORVA is a boutique university admissions consultancy for families in the UAE and Saudi Arabia. We work with ambitious students from Year 9 onwards, building a deliberate path to Oxford, Cambridge, the Ivy League, and Europe&apos;s finest universities — and beyond, to a future-proof career they genuinely want to build.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-10 py-6 pl-6 border-l-2 rounded-r-xl"
                style={{ borderColor: COLORS.primary, background: "rgba(213,30,32,0.04)" }}
              >
                <p className="text-lg md:text-xl font-medium italic leading-relaxed" style={{ color: COLORS.warmCream }}>
                  &ldquo;We serve you. Not universities.&rdquo;
                </p>
                <p className="text-sm mt-2" style={{ color: "rgba(251,249,246,0.4)" }}>— ORVA Founder</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                  Talk to Daniela
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MovingBorderLink>
              </motion.div>
            </div>

            {/* Right — Image with rotating frame */}
            <div className="relative hidden lg:block min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute inset-0"
              >
                <Image src="/images/img02.jpeg" alt="Students at university" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
              </motion.div>
              {/* Rotating decorative ring over image */}
              <RotateOnScroll className="absolute top-10 right-10 w-32 h-32 opacity-30" range={[0, 360]}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#D51E20" strokeWidth="0.5" strokeDasharray="4 6" />
                </svg>
              </RotateOnScroll>
            </div>
          </div>
        </section>

        {/* Scroll-driven text strip */}
        <section className="py-6 overflow-hidden" style={{ background: COLORS.deepBlack, borderTop: "1px solid rgba(213,30,32,0.1)", borderBottom: "1px solid rgba(213,30,32,0.1)" }}>
          <ScrollRevealStrip direction="right">
            <span className="text-[80px] md:text-[120px] font-black tracking-tighter text-white/[0.03] whitespace-nowrap">
              OXFORD &nbsp; CAMBRIDGE &nbsp; HARVARD &nbsp; MIT &nbsp; STANFORD &nbsp; LSE &nbsp; UCL &nbsp; IMPERIAL &nbsp; YALE &nbsp; PRINCETON
            </span>
          </ScrollRevealStrip>
        </section>

        {/* Is ORVA Right For You + Grid Pattern */}
        <section className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <GridPattern variant="dark" />
          <Spotlight fill="#D51E20" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block lg:col-span-2 relative h-[700px]"
            >
              <Image src="/images/img07.jpeg" alt="Student contemplating future" fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F]" />
              <div className="absolute inset-0 bg-black/20" />
              {/* Floating decorative element */}
              <div className="absolute bottom-12 left-12 animate-float">
                <div className="w-16 h-16 rounded-full border border-red-600/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-600/50 animate-pulse-glow" />
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-3 px-8 md:px-16 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: COLORS.primary }}
              >
                Is Orva Right For You?
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight mb-10"
                style={{ color: COLORS.warmCream }}
              >
                Does any of this sound familiar?
              </motion.h2>

              <div className="space-y-6 mb-10">
                {IS_ORVA_RIGHT_PAIN_POINTS.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600/10 border border-red-600/30 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      <span className="text-red-500 text-lg font-bold">&rarr;</span>
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: COLORS.warmCream }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(251,249,246,0.65)" }}
              >
                Orva is boutique by choice. Every family receives genuinely personalised guidance — from advisors who represent the world&apos;s best universities and understand what it takes to get there.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <MovingBorderLink href="/contact" containerClassName="h-12" duration={4000}>
                  Talk to ORVA
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MovingBorderLink>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Numbers — with Grid Pattern */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: COLORS.primary }}>
                By The Numbers
              </span>
              <h2 className="text-[clamp(32px,5vw,48px)] font-bold mt-4 tracking-tight" style={{ color: COLORS.textDark }}>
                What Sets Us Apart
              </h2>
            </motion.div>

            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {HERO_STATS.map((stat, i) => (
                <BentoGridItem
                  key={i}
                  title={
                    <span className="text-[clamp(36px,6vw,52px)] font-black leading-none" style={{ color: COLORS.primary }}>
                      {stat.value}
                    </span>
                  }
                  description={stat.label}
                  icon={
                    <div className="w-8 h-8 rounded-full animate-pulse-glow" style={{ background: `${COLORS.primary}15` }} />
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Scroll-driven text strip — reversed */}
        <section className="py-4 overflow-hidden" style={{ background: COLORS.warmSand }}>
          <ScrollRevealStrip direction="left">
            <span className="text-[60px] md:text-[90px] font-black tracking-tighter whitespace-nowrap" style={{ color: `${COLORS.primary}08` }}>
              STRATEGY &nbsp; PROFILE &nbsp; APPLICATIONS &nbsp; FUTURE &nbsp; CAREER &nbsp; UNIVERSITY &nbsp; AMBITION &nbsp; EXCELLENCE
            </span>
          </ScrollRevealStrip>
        </section>

        {/* Why Orva — 6 Cards with side image + Floating elements */}
        <section className="relative overflow-hidden noise-bg" style={{ background: COLORS.deepBlack }}>
          <FloatingGeometry variant="dark" density="dense" />
          <Spotlight fill="#D51E20" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Content — 8 cols */}
            <div className="lg:col-span-8 px-8 md:px-12 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: COLORS.primary }}
              >
                Why Orva
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight mb-12"
                style={{ color: COLORS.warmCream }}
              >
                Six things we do best.
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {WHY_ORVA_POINTS.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                    className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-red-600/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-2xl font-black mb-3" style={{ color: COLORS.primary }}>
                      {point.number}
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: COLORS.warmCream }}>
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(251,249,246,0.6)" }}>
                      {point.description}
                    </p>
                    {/* Animated corner accent */}
                    <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" className="w-full h-full animate-spin-slow">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(213,30,32,0.3)" strokeWidth="0.5" strokeDasharray="3 5" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-12 py-6 pl-6 border-l-2 rounded-r-xl"
                style={{ borderColor: COLORS.primary, background: "rgba(213,30,32,0.04)" }}
              >
                <p className="text-lg md:text-xl font-medium italic leading-relaxed" style={{ color: COLORS.warmCream }}>
                  &ldquo;We are ambitious for every child we advise. But what drives us is simple: we want them to thrive.&rdquo;
                </p>
                <p className="text-sm mt-3" style={{ color: "rgba(251,249,246,0.35)" }}>— ORVA, Founder</p>
              </motion.div>
            </div>

            {/* Right — Stacked images with rotating ornament */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-0 relative">
              {/* Rotating ornament between images */}
              <RotateOnScroll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20" range={[0, 720]}>
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="#D51E20" strokeWidth="1" strokeDasharray="6 4" />
                  <circle cx="40" cy="40" r="25" fill="none" stroke="#D51E20" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="40" cy="40" r="4" fill="#D51E20" opacity="0.6" />
                </svg>
              </RotateOnScroll>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-1/2"
              >
                <Image src="/images/img08.jpeg" alt="Student life" fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F0F0F]/80" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative h-1/2"
              >
                <Image src="/images/img09.jpeg" alt="University campus" fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F0F0F]/80" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Future — with Lamp Effect, Image, Floating Geometry */}
        <LampEffect color="#D51E20">
          <section style={{ background: COLORS.deepBlack }} className="relative px-6 md:px-12 py-20 md:py-28">
            <FloatingGeometry variant="dark" density="sparse" />
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
                  style={{ color: COLORS.primary }}
                >
                  The Future
                </motion.div>

                <TextGenerateEffect
                  words="The degree matters. The career matters more."
                  className="text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-tight mb-8"
                  style={{ color: COLORS.warmCream }}
                  filter
                  duration={0.5}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="space-y-5 mb-10"
                >
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(251,249,246,0.7)" }}>
                    The world your child graduates into will look very different from the world entering university today. Artificial Intelligence is reshaping industries faster than any technology before it.
                  </p>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed" style={{ color: COLORS.warmCream }}>
                    Choosing the right university is important. Choosing the right future is everything.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                    Talk to ORVA
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MovingBorderLink>
                </motion.div>
              </div>

              {/* Image with rotating frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden hidden lg:block"
              >
                <Image src="/images/img10.jpeg" alt="Future career" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-white text-sm font-bold">Future-proof career planning</p>
                  <p className="text-white/60 text-xs mt-1">AI-aware university and major selection</p>
                </div>
                {/* Animated ring decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 animate-spin-slow opacity-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#D51E20" strokeWidth="1" strokeDasharray="8 4" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </section>
        </LampEffect>

        {/* CTA Strip with background image + scale animation */}
        <motion.section
          ref={ctaRef}
          style={{ scale: ctaScale }}
          className="relative py-24 md:py-32 overflow-hidden rounded-none"
        >
          <div className="absolute inset-0 opacity-15">
            <Image src="/images/img14.jpeg" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]/80" />
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.2] tracking-tight mb-6"
              style={{ color: COLORS.warmCream }}
            >
              The window is shorter than most families realize.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(251,249,246,0.65)" }}
            >
              Your child only applies once. Make sure it&apos;s the right university. Make sure it&apos;s the right degree. Make sure it&apos;s the right future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center"
            >
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={3000}>
                Talk to ORVA Strategist
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MovingBorderLink>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
