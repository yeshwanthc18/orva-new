"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, STUDENT_STORIES } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function StoriesPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section with background image */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img06.jpeg" alt="Student stories" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-[#0F0F0F]/50" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="label text-white/80 mb-6">Real stories</span>
              <TextGenerateEffect
                words="Real journeys. Real outcomes."
                className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-8"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                Every child&apos;s journey with Orva is different. What they share is this: the right decision, made with confidence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Scrolling text strip */}
        <div className="py-3 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <ScrollRevealStrip direction="left">
            <span className="text-[clamp(14px,1.5vw,18px)] font-bold text-white/8 uppercase tracking-[0.2em]">
              Success &bull; Confidence &bull; Growth &bull; Discovery &bull; Achievement &bull; Success &bull; Confidence &bull; Growth &bull; Discovery &bull; Achievement &bull; Success &bull; Confidence &bull; Growth &bull; Discovery &bull; Achievement
            </span>
          </ScrollRevealStrip>
        </div>

        {/* Student Stories Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="space-y-24">
              {STUDENT_STORIES.map((story, index) => (
                <StoryCard key={index} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Quote Strip Section with background */}
        <section className="relative py-20 md:py-32 overflow-hidden noise-bg">
          <div className="absolute inset-0">
            <Image src="/images/img12.jpeg" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/85" />
          </div>
          <FloatingGeometry variant="dark" density="normal" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-8 opacity-40">
                <path
                  d="M12 32c0-5.333 2.667-10.667 8-14.667C14.667 20 12 24 12 28c0 4 2 8 6 10-2-1-4-4-6-6zm24 0c0-5.333 2.667-10.667 8-14.667-5.333 2.667-8 7-8 11c0 4 2 8 6 10-2-1-4-4-6-6z"
                  fill="currentColor"
                  className="text-white"
                />
              </svg>
              <blockquote className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
                &ldquo;We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.&rdquo;
              </blockquote>
              <p className="text-lg text-white/80 font-semibold tracking-wide">— ORVA, Founder</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden" style={{ background: COLORS.warmSand }}>
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Your story could be next
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.textLight }}>
                Every ambitious student deserves guidance from advisors who understand not just universities, but the career and life that follows.
              </p>
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                Talk to Orva
              </MovingBorderLink>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface StoryCardProps {
  story: (typeof STUDENT_STORIES)[0];
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Image */}
      <motion.div
        style={{ y: imageY }}
        className={`relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Tag overlay */}
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
          <p className="text-white text-sm font-bold">{story.name} &middot; {story.university}</p>
          <p className="text-white/70 text-xs mt-1">{story.location} &middot; {story.tag}</p>
        </div>
        {/* Decorative rotating element */}
        <div className="absolute top-4 right-4 w-12 h-12 animate-spin-slow opacity-20">
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" strokeDasharray="3 5" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="mb-4">
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: COLORS.primary }}>
              {story.subject} &middot; {story.university}
            </h3>
            <p className="text-sm font-medium" style={{ color: COLORS.textMuted }}>{story.tag}</p>
          </div>

          <div className="w-12 h-1 mb-5 rounded-full" style={{ background: COLORS.primary }} />

          <p className="text-base leading-relaxed mb-6" style={{ color: COLORS.textDark }}>{story.story}</p>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: COLORS.primary }}>
            <span className="w-2 h-2 rounded-full" style={{ background: COLORS.primary }}></span>
            {story.name}&apos;s Story
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
