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
import BrandVideoSection from "./Video";

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
                <div className="flex items-center justify-center px-8">
                  <div className="relative h-12 w-32">
                    <Image
                      src={uni.logo!}
                      alt={uni.name}
                      fill
                      className="object-contain grayscale brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
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

        <ZoomParallax />
        <BrandVideoSection />

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
              className="text-[18px] md:text-[20px] font-medium tracking-tighter whitespace-nowrap"
              style={{ color: "rgba(28, 28, 28, 0.671)" }}
            >
              STRATEGY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; PROFILE &nbsp; &nbsp; &nbsp; &nbsp; APPLICATIONS
              &nbsp; &nbsp; &nbsp; &nbsp; FUTURE &nbsp; &nbsp; &nbsp; &nbsp;
              CAREER &nbsp; &nbsp; &nbsp; &nbsp; UNIVERSITY &nbsp; &nbsp; &nbsp;
              &nbsp; AMBITION &nbsp; &nbsp; &nbsp; &nbsp; EXCELLENCE &nbsp;
              &nbsp; &nbsp; &nbsp; STRATEGY &nbsp; &nbsp; &nbsp; &nbsp; PROFILE
              &nbsp; &nbsp; &nbsp; &nbsp; APPLICATIONS &nbsp; &nbsp; &nbsp;
              &nbsp; FUTURE &nbsp; &nbsp; &nbsp; &nbsp; CAREER &nbsp; &nbsp;
              &nbsp; &nbsp; UNIVERSITY &nbsp; &nbsp; &nbsp; &nbsp; AMBITION
              &nbsp; &nbsp; &nbsp; &nbsp; EXCELLENCE &nbsp; &nbsp; &nbsp; &nbsp;
              STRATEGY &nbsp; &nbsp; &nbsp; &nbsp; PROFILE &nbsp; &nbsp; &nbsp;
              &nbsp; APPLICATIONS &nbsp; &nbsp; &nbsp; &nbsp; FUTURE &nbsp;
              &nbsp; &nbsp; &nbsp; CAREER &nbsp; &nbsp; &nbsp; &nbsp; UNIVERSITY
              &nbsp; &nbsp; &nbsp; &nbsp; AMBITION &nbsp; &nbsp; &nbsp; &nbsp;
              EXCELLENCE &nbsp; &nbsp; &nbsp; &nbsp; STRATEGY &nbsp; &nbsp;
              &nbsp; &nbsp; PROFILE &nbsp; &nbsp; &nbsp; &nbsp; APPLICATIONS
              &nbsp; &nbsp; &nbsp; &nbsp; FUTURE &nbsp; CAREER &nbsp; &nbsp;
              &nbsp; &nbsp; UNIVERSITY &nbsp; &nbsp; &nbsp; &nbsp; AMBITION
              &nbsp; &nbsp; &nbsp; &nbsp; EXCELLENCE
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
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden hidden md:block"
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
              Starting early gives you more choices and greater peace of mind.
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
                Talk to Orva
              </Button>
              <Button href="/quiz" variant="secondary" size="lg">
                University Match Quiz
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
