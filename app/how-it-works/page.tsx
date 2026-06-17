"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, PROCESS_STEPS, ACCEPTANCE_TIMELINE, WHATS_INCLUDED } from "@/lib/constants";
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { SpotlightHero, Spotlight } from "@/components/ui/Spotlight";

export default function HowItWorksPage() {
  useLenis();
  const [expandedYear, setExpandedYear] = useState<string | null>("Year 9/10");

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20 md:pb-40">
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
        </LampEffect>

        {/* Process Steps — Bento Grid */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="label mb-6">The Process</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.textDark }}>
                Four phases. One strategy.
              </h2>
            </div>
            <BentoGrid className="lg:grid-cols-2">
              {PROCESS_STEPS.map((step) => (
                <BentoGridItem
                  key={step.number}
                  className="min-h-[220px]"
                  title={
                    <div className="flex items-center gap-4">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold text-white"
                        style={{ background: COLORS.primary }}
                      >
                        {step.number}
                      </div>
                      <span>{step.title}</span>
                    </div>
                  }
                  description={step.description}
                  icon={
                    <div className="flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase">
                      <span style={{ color: COLORS.primary }}>{step.year}</span>
                      <span style={{ color: COLORS.textMuted }}>{step.age}</span>
                    </div>
                  }
                >
                  <div className="pt-4 border-t border-black/[0.06] mt-4" style={{ color: COLORS.primary }}>
                    <p className="font-semibold text-sm">The window from here</p>
                    <p className="text-sm mt-2 opacity-80">{step.windowText}</p>
                  </div>
                </BentoGridItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Acceptance Timeline Section */}
        <SpotlightHero>
          <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
            <Spotlight className="absolute top-0 left-0 w-full h-full" fill="#D51E20" />
            <div className="relative z-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
              >
                <span className="label mb-6">The Acceptance Timeline</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                  The families who reach world&apos;s Top 100 universities start early. See where you are...
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                  Click your child&apos;s current year. See what the best-prepared families have already done — and what&apos;s still possible from here.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {ACCEPTANCE_TIMELINE.map((timeline) => (
                  <TimelineAccordion
                    key={timeline.year}
                    timeline={timeline}
                    isExpanded={expandedYear === timeline.year}
                    onToggle={() => setExpandedYear(expandedYear === timeline.year ? null : timeline.year)}
                  />
                ))}
              </motion.div>
            </div>
          </section>
        </SpotlightHero>

        {/* What's Included Section — Bento Grid */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="label mb-6">What&apos;s Included</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                One programme. One strategy.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
                Everything included — not as an upgrade, but as standard. No tiers. No upsells. No one-off sessions.
              </p>
            </motion.div>

            <BentoGrid className="md:grid-cols-2">
              {[
                { key: "strategy", label: "Strategy", subtitle: "Your personalised roadmap" },
                { key: "profile", label: "Profile", subtitle: "Building competitive advantage" },
                { key: "applications", label: "Applications", subtitle: "10-15 universities supported" },
                { key: "family", label: "Family", subtitle: "We support the whole family" },
              ].map((category) => (
                <BentoGridItem
                  key={category.key}
                  title={category.label}
                  description={category.subtitle}
                  icon={
                    <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: COLORS.primary }}>
                      {category.key}
                    </span>
                  }
                >
                  <ul className="space-y-3 mt-4">
                    {WHATS_INCLUDED[category.key as keyof typeof WHATS_INCLUDED].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                          style={{ background: COLORS.primary }}
                        ></span>
                        <span className="text-sm" style={{ color: COLORS.textLight }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </BentoGridItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* CTA Strip */}
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Talk to ORVA Strategist and secure your space
              </h2>
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                Get in Touch
              </MovingBorderLink>
            </motion.div>
          </div>
        </LampEffect>
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
  const variants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <div className="border-2 border-black/[0.06] rounded-xl overflow-hidden transition-all duration-300 hover:border-red-300/40 bg-white hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center justify-between hover:opacity-80 transition-opacity"
      >
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.textDark }}>
            {timeline.year}
          </h3>
          <p className="text-sm font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.primary }}>
            {timeline.age} &bull; {timeline.phase}
          </p>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.primary}
          strokeWidth="2"
          className="flex-shrink-0"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </motion.svg>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
            className="border-t-2 border-black/[0.06]"
          >
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>
                  What the strongest applicants are already doing
                </h4>
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
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>
                  What ORVA does at this stage
                </h4>
                <ul className="space-y-3">
                  {timeline.orvaDoes.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: COLORS.primary }}></span>
                      <span style={{ color: COLORS.textLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-4 rounded-lg"
                style={{ background: `${COLORS.primary}08`, borderLeft: `4px solid ${COLORS.primary}` }}
              >
                <p className="font-semibold mb-2" style={{ color: COLORS.primary }}>The window from here</p>
                <p style={{ color: COLORS.textLight }}>{timeline.window}</p>
              </div>

              <div>
                <MovingBorderLink href="/contact" containerClassName="h-10" duration={4000}>
                  Get Started
                </MovingBorderLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
