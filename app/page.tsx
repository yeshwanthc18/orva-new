"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
import {
  COLORS,
  HERO_STATS,
  UNIVERSITY_MARQUEE,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
} from "@/lib/constants";

export default function Page() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Loader />
      <Navbar />
      <main>
        <Hero />

        {/* University Marquee */}
        <section style={{ padding: "48px 0", background: COLORS.deepBlack, overflow: "hidden" }}>
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

        {/* What We Do — Split with Image */}
        <section className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
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
                className="mb-10 py-6 pl-6 border-l-2"
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

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block min-h-[600px]"
            >
              <Image
                src="/images/img02.jpeg"
                alt="Students at university"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Is ORVA Right For You */}
        <section className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <Spotlight fill="#D51E20" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center relative z-10">
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block lg:col-span-2 relative h-[700px]"
            >
              <Image
                src="/images/img07.jpeg"
                alt="Student contemplating future"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F]" />
              <div className="absolute inset-0 bg-black/20" />
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600/10 border border-red-600/30 group-hover:bg-red-600/20 transition-colors">
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

        {/* Key Numbers — with background imagery */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden" style={{ background: COLORS.warmCream }}>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none">
            <Image src="/images/img11.jpeg" alt="" fill className="object-cover" sizes="50vw" />
          </div>
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
                    <div className="w-8 h-8 rounded-full" style={{ background: `${COLORS.primary}15` }} />
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Why Orva — 6 Cards with side image */}
        <section className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <Spotlight fill="#D51E20" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
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
                    className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-red-600/40 hover:bg-white/[0.05] transition-all duration-300"
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
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-12 py-6 pl-6 border-l-2"
                style={{ borderColor: COLORS.primary, background: "rgba(213,30,32,0.04)" }}
              >
                <p className="text-lg md:text-xl font-medium italic leading-relaxed" style={{ color: COLORS.warmCream }}>
                  &ldquo;We are ambitious for every child we advise. But what drives us is simple: we want them to thrive.&rdquo;
                </p>
                <p className="text-sm mt-3" style={{ color: "rgba(251,249,246,0.35)" }}>— ORVA, Founder</p>
              </motion.div>
            </div>

            {/* Right — Stacked images */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-0 relative">
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

        {/* The Future — with Lamp Effect and Image */}
        <LampEffect color="#D51E20">
          <section style={{ background: COLORS.deepBlack }} className="px-6 md:px-12 py-20 md:py-28">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

              {/* Image */}
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
              </motion.div>
            </div>
          </section>
        </LampEffect>

        {/* CTA Strip with background image */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/img14.jpeg" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]/80" />
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
        </section>
      </main>
      <Footer />
    </>
  );
}
