"use client";

import { useRef, useState } from "react";
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
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import {
  ScrollRevealStrip,
  RotateOnScroll,
} from "@/components/ui/ScrollAnimations";
import {
  COLORS,
  HERO_STATS,
  UNIVERSITY_MARQUEE,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
} from "@/lib/constants";
import EventPreheader from "@/components/PreHeader";
import AnimatedGradientSection from "@/components/AnimatedGradient";
import WhyOrva from "./why-orva";
import SuccessStories from "./success-stories";
import KeyNumbers from "./key-numbers";
import ZoomParallax from "@/components/ZoomParallax";
import ChooseOrva from "./ChooseOrva";
import Process from "@/components/Process";
import Story from "@/components/Story";

export default function HomeNewPage() {
  useLenis();
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaScale = useTransform(ctaScroll, [0, 0.5, 1], [0.95, 1, 0.98]);
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>
      <Cursor />
      <Trail />
      <Loader />
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main>
        <Hero />

        {/* University Marquee */}
        <section
          className="relative"
          style={{
            padding: "8px 0",
            background: COLORS.deepBlack,
            overflow: "hidden",
          }}
        >
          <InfiniteMovingCards
            items={UNIVERSITY_MARQUEE.map((uni) => ({
              content: (
                <div className="flex items-center gap-4 px-8 whitespace-nowrap">
                  {/* {uni.logo ? (
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      {(uni.name ?? "?").charAt(0)}
                    </div>
                  )} */}

                  {/* <span>{uni.name}</span> */}

                  <span className="text-2xl md:text-3xl font-semibold tracking-tight text-white/85">
                    {uni.name}
                  </span>
                </div>
              ),
            }))}
            direction="left"
            speed="slow"
            pauseOnHover
            className="max-w-none"
          />
        </section>
        {/* What We Do — Split with Image + Floating Geometry */}
        {/* <section
          className="relative overflow-hidden noise-bg"
          style={{ background: COLORS.warmCream }}
        >
          <FloatingGeometry variant="light" density="normal" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        
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
                style={{ color: COLORS.textDark }}
                filter
                duration={0.5}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-base md:text-lg leading-relaxed mb-10"
                style={{ color: COLORS.textLight }}
              >
                ORVA is a boutique university admissions consultancy for
                families in the UAE and Saudi Arabia. We work with ambitious
                students from Year 9 onwards, building a deliberate path to
                Oxford, Cambridge, the Ivy League, and Europe&apos;s finest
                universities & beyond, to a future-proof career they genuinely
                want to build.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-10 py-6 pl-6 border-l-2 rounded-r-xl"
                style={{
                  borderColor: COLORS.primary,
                  background: "rgba(213,30,32,0.06)",
                }}
              >
                <p
                  className="text-lg md:text-xl font-medium italic leading-relaxed"
                  style={{ color: COLORS.textDark }}
                >
                  &ldquo;We serve you. Not universities.&rdquo;
                </p>
                <p className="text-sm mt-2" style={{ color: COLORS.textMuted }}>
                  — Founder, Orva Education
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" size="lg">
                    Talk to Our Founder
                  </Button>
                  <Button href="/why-orva" variant="secondary" size="lg">
                    Why Orva
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/img02.jpeg"
                  alt="Students at university"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F6]/50 via-transparent to-transparent" />
              </motion.div>

              <RotateOnScroll
                className="absolute top-10 right-10 w-32 h-32 opacity-30"
                range={[0, 360]}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#D51E20"
                    strokeWidth="0.5"
                    strokeDasharray="4 6"
                  />
                </svg>
              </RotateOnScroll>
            </div>
          </div>
        </section> */}
        <ZoomParallax />

        {/* Is ORVA Right For You + Grid Pattern */}
        {/* <ChooseOrva /> */}
        <Story />

        <KeyNumbers />

        {/* Scroll-driven text strip — reversed */}
        <section
          className="py-2 overflow-hidden"
          style={{ background: COLORS.warmSand }}
        >
          <ScrollRevealStrip direction="left">
            <span
              className="text-[20px] md:text-[30px] font-black tracking-tighter whitespace-nowrap"
              style={{ color: `${COLORS.primary}1` }}
            >
              STRATEGY &nbsp; PROFILE &nbsp; APPLICATIONS &nbsp; FUTURE &nbsp;
              CAREER &nbsp; UNIVERSITY &nbsp; AMBITION &nbsp; EXCELLENCE &nbsp;
              STRATEGY &nbsp; PROFILE &nbsp; APPLICATIONS &nbsp; FUTURE &nbsp;
              CAREER &nbsp; UNIVERSITY &nbsp; AMBITION &nbsp; EXCELLENCE
            </span>
          </ScrollRevealStrip>
        </section>
        <SuccessStories />
        <WhyOrva />
        {/* The Future — with Lamp Effect, Image, Floating Geometry */}
        <AnimatedGradientSection className="py-2">
          <section
            // style={{ background: COLORS.primary }}
            className="relative px-6 md:px-12 py-20 md:py-28"
          >
            <FloatingGeometry variant="dark" density="sparse" />
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
                  style={{ color: COLORS.warmCream }}
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
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(251,249,246,0.7)" }}
                  >
                    The world your child graduates into will look very different
                    from the world entering university today. Artificial
                    Intelligence is reshaping industries faster than any
                    technology before it.
                  </p>
                  <p
                    className="text-lg md:text-xl font-semibold leading-relaxed"
                    style={{ color: COLORS.warmCream }}
                  >
                    Choosing the right university is important. Choosing the
                    right future is everything.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Button href="/contact" variant="secondaryLight" size="lg">
                    Talk to ORVA
                  </Button>
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
                <Image
                  src="/images/img10.jpeg"
                  alt="Future career"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-white text-sm font-bold">
                    Future-proof career planning
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    AI-aware university and major selection
                  </p>
                </div>
                {/* Animated ring decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 animate-spin-slow opacity-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#D51E20"
                      strokeWidth="1"
                      strokeDasharray="8 4"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedGradientSection>

        {/* CTA Strip with background image + scale animation */}
        <motion.section
          ref={ctaRef}
          style={{ scale: ctaScale }}
          className="relative py-24 md:py-32 overflow-hidden rounded-none"
        >
          <div className="absolute inset-0 ">
            <Image
              src="/imgcta.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-[#0F0F0F]/80" />
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.2] italic tracking-tight mb-6"
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
              Your child only applies once. Make sure it&apos;s the right
              university. Make sure it&apos;s the right degree. Make sure
              it&apos;s the right future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button href="/contact" variant="primary" size="lg">
                Talk to Our Founder
              </Button>
              <Button href="/quiz" variant="secondary" size="lg">
                Discover Your Child's Profile
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
