"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, PROCESS_STEPS, ACCEPTANCE_TIMELINE, WHATS_INCLUDED } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function HowItWorksPage() {
  useLenis();
  const [expandedYear, setExpandedYear] = useState<string | null>("Year 9/10");

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section with background image */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img05.jpeg" alt="Students studying" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-[#0F0F0F]/50" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label text-white/80 mb-6">How It Works</span>
              <TextGenerateEffect
                words="From dream to admission. And beyond."
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
                One strategist. One family. Minimum one year. Recommended two or more. A structured, personalised journey from Year 9 to admission.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Scrolling text strip */}
        <div className="py-4 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <ScrollRevealStrip direction="right">
            <span className="text-[clamp(16px,2vw,22px)] font-bold text-white/10 uppercase tracking-[0.2em]">
              Discover &bull; Plan &bull; Build &bull; Apply &bull; Succeed &bull; Discover &bull; Plan &bull; Build &bull; Apply &bull; Succeed &bull; Discover &bull; Plan &bull; Build &bull; Apply &bull; Succeed
            </span>
          </ScrollRevealStrip>
        </div>

        {/* Process Steps — Horizontal Scroll */}
        <section className="relative" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-4"
            >
              <span className="label mb-4">The Process</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4" style={{ color: COLORS.textDark }}>
                Four phases. One strategy.
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                Scroll to explore each phase of the journey.
              </p>
            </motion.div>
          </div>
          <HorizontalProcessScroll />
        </section>

        {/* Acceptance Timeline Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden noise-bg" style={{ background: COLORS.warmSand }}>
          <Spotlight fill="#D51E20" />
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="label mb-4">The Acceptance Timeline</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                The families who reach world&apos;s Top 100 universities start early.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                Click your child&apos;s current year. See what the best-prepared families have already done — and what&apos;s still possible from here.
              </p>
            </motion.div>

            <div className="space-y-4">
              {ACCEPTANCE_TIMELINE.map((timeline) => (
                <TimelineAccordion
                  key={timeline.year}
                  timeline={timeline}
                  isExpanded={expandedYear === timeline.year}
                  onToggle={() => setExpandedYear(expandedYear === timeline.year ? null : timeline.year)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included — Cards with icons */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="label mb-4">What&apos;s Included</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                One programme. One strategy.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                Everything included — not as an upgrade, but as standard.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: "strategy", label: "Strategy", subtitle: "Your personalised roadmap", img: "/images/img02.jpeg" },
                { key: "profile", label: "Profile", subtitle: "Building competitive advantage", img: "/images/img06.jpeg" },
                { key: "applications", label: "Applications", subtitle: "10-15 universities supported", img: "/images/img04.jpeg" },
                { key: "family", label: "Family", subtitle: "We support the whole family", img: "/images/img03.jpeg" },
              ].map((category, idx) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background image accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity rounded-bl-full overflow-hidden">
                    <Image src={category.img} alt="" fill className="object-cover" sizes="128px" />
                  </div>
                  {/* Corner spin animation */}
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 50 50" className="w-full h-full animate-spin-slow">
                      <rect x="10" y="10" width="30" height="30" fill="none" stroke="rgba(213,30,32,0.15)" strokeWidth="0.5" transform="rotate(45 25 25)" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-1" style={{ color: COLORS.textDark }}>{category.label}</h3>
                    <p className="text-sm font-semibold tracking-[0.1em] uppercase mb-6" style={{ color: COLORS.primary }}>{category.subtitle}</p>
                    <ul className="space-y-3">
                      {WHATS_INCLUDED[category.key as keyof typeof WHATS_INCLUDED].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: COLORS.primary }}></span>
                          <span className="text-sm" style={{ color: COLORS.textLight }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip with background */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img14.jpeg" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Talk to ORVA Strategist and secure your space
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">Get in Touch</Button>
                <Button href="/quiz" variant="secondary" size="lg">Take the Quiz</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TimelineAccordion({
  timeline,
  isExpanded,
  onToggle,
}: {
  timeline: (typeof ACCEPTANCE_TIMELINE)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-black/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-300/40 bg-white hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center justify-between hover:opacity-80 transition-opacity"
      >
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.textDark }}>{timeline.year}</h3>
          <p className="text-sm font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.primary }}>
            {timeline.age} &bull; {timeline.phase}
          </p>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" className="flex-shrink-0"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </motion.svg>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-black/[0.06]"
          >
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>What the strongest applicants are already doing</h4>
                <ul className="space-y-3">
                  {timeline.strongestAlready.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: COLORS.primary }}></span>
                      <span style={{ color: COLORS.textLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>What ORVA does at this stage</h4>
                <ul className="space-y-3">
                  {timeline.orvaDoes.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: COLORS.primary }}></span>
                      <span style={{ color: COLORS.textLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl" style={{ background: `${COLORS.primary}08`, borderLeft: `4px solid ${COLORS.primary}` }}>
                <p className="font-semibold mb-2" style={{ color: COLORS.primary }}>The window from here</p>
                <p style={{ color: COLORS.textLight }}>{timeline.window}</p>
              </div>
              <Button href="/contact" variant="primary" size="md">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HorizontalProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(PROCESS_STEPS.length - 1) * 80}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} style={{ height: `${PROCESS_STEPS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Progress bar */}
        <div className="absolute top-20 left-6 right-6 md:left-12 md:right-12 h-[2px] bg-black/[0.06] rounded-full z-20">
          <motion.div style={{ width: progressWidth }} className="h-full bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] rounded-full" />
        </div>

        {/* Step indicators */}
        <div className="absolute top-[72px] left-6 right-6 md:left-12 md:right-12 flex justify-between z-20">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322]" />
              <span className="text-[9px] font-bold mt-1 tracking-wider uppercase hidden md:block" style={{ color: COLORS.textMuted }}>{step.year}</span>
            </div>
          ))}
        </div>

        {/* Cards container */}
        <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-12 pt-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-lg h-full">
                {/* Image */}
                <div className="relative h-[200px] lg:h-auto lg:col-span-5">
                  <Image
                    src={`/images/img${String(idx + 8).padStart(2, '0')}.jpeg`}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white bg-gradient-to-br from-[#D51E20] via-[#F45104] to-[#FA8322] shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 animate-spin-slow opacity-30">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" strokeDasharray="3 5" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-xs font-bold tracking-[0.15em] uppercase">
                    <span style={{ color: COLORS.primary }}>{step.year}</span>
                    <span style={{ color: COLORS.textMuted }}>&bull; {step.age}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.textDark }}>{step.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: COLORS.textLight }}>{step.description}</p>
                  <div className="pt-4 border-t border-black/[0.06] mt-auto" style={{ color: COLORS.primary }}>
                    <p className="font-semibold text-sm">The window from here</p>
                    <p className="text-sm mt-2 opacity-80">{step.windowText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
