"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, PROCESS_STEPS, ACCEPTANCE_TIMELINE, WHATS_INCLUDED } from "@/lib/constants";

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
        <HeroSection />

        {/* Process Steps Section */}
        <ProcessStepsSection />

        {/* Acceptance Timeline Section */}
        <AcceptanceTimelineSection expandedYear={expandedYear} setExpandedYear={setExpandedYear} />

        {/* What's Included Section */}
        <WhatsIncludedSection />

        {/* CTA Strip */}
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-white"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white/80">
              How It Works
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            From dream to admission. And beyond.
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            One strategist. One family. Minimum one year. Recommended two or more. A structured, personalised journey from Year 9 to admission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStepsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmCream }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:col-start-2" : "lg:col-start-1"}`}
            >
              <div
                className="p-8 md:p-10 rounded-2xl border-2 border-black/[0.08] hover:border-red-300/50 transition-all duration-300"
                style={{ background: "white" }}
              >
                {/* Step Number */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full font-cairo text-4xl font-bold text-white mb-4"
                    style={{ background: COLORS.primary }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step Meta */}
                <div className="mb-4 space-y-1">
                  <p className="text-sm font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.primary }}>
                    {step.year}
                  </p>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-500">
                    {step.age}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.textDark }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-base md:text-lg" style={{ color: COLORS.textLight }}>
                  {step.description}
                </p>

                {/* Window Text */}
                <div
                  className="pt-6 border-t-2 border-black/[0.06]"
                  style={{ color: COLORS.primary }}
                >
                  <p className="font-semibold text-sm">The window from here</p>
                  <p className="text-sm mt-2 opacity-80">{step.windowText}</p>
                </div>

                {/* Optional note for step 4 */}
                {step.number === "04" && (
                  <div
                    className="mt-6 pt-6 border-t-2 border-black/[0.06] text-sm italic"
                    style={{ color: COLORS.textMuted }}
                  >
                    {step.windowText.includes("Optional") && (
                      <p>Plus optional: First-year university support — a trusted voice through Year 1 on campus.</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcceptanceTimelineSection({
  expandedYear,
  setExpandedYear,
}: {
  expandedYear: string | null;
  setExpandedYear: (year: string | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmSand }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
              The Acceptance Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            The families who reach world's Top 100 universities start early. See where you are...
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
            Click your child's current year. See what the best-prepared families have already done — and what's still possible from here.
          </p>
        </motion.div>

        {/* Timeline Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
    <div
      className="border-2 border-black/[0.08] rounded-xl overflow-hidden transition-all duration-300 hover:border-black/[0.15]"
      style={{ background: "white" }}
    >
      {/* Tab Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 md:p-8 flex items-center justify-between hover:opacity-80 transition-opacity"
      >
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: COLORS.textDark }}>
            {timeline.year}
          </h3>
          <p className="text-sm font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.primary }}>
            {timeline.age} • {timeline.phase}
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

      {/* Expanded Content */}
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
              {/* What the strongest applicants are already doing */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>
                  What the strongest applicants are already doing
                </h4>
                <ul className="space-y-3">
                  {timeline.strongestAlready.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ background: COLORS.primary }}
                      ></span>
                      <span style={{ color: COLORS.textLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What ORVA does at this stage */}
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.textDark }}>
                  What ORVA does at this stage
                </h4>
                <ul className="space-y-3">
                  {timeline.orvaDoes.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ background: COLORS.primary }}
                      ></span>
                      <span style={{ color: COLORS.textLight }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The window from here */}
              <div
                className="p-4 rounded-lg"
                style={{ background: `${COLORS.primary}08`, borderLeft: `4px solid ${COLORS.primary}` }}
              >
                <p className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                  The window from here
                </p>
                <p style={{ color: COLORS.textLight }}>{timeline.window}</p>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                  }}
                >
                  Get Started
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WhatsIncludedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  const categories = [
    { key: "strategy", label: "Strategy", subtitle: "Your personalised roadmap" },
    { key: "profile", label: "Profile", subtitle: "Building competitive advantage" },
    { key: "applications", label: "Applications", subtitle: "10-15 universities supported" },
    { key: "family", label: "Family", subtitle: "We support the whole family" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmCream }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
              What's Included
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            One programme. One strategy.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
            Everything included — not as an upgrade, but as standard. No tiers. No upsells. No one-off sessions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="p-8 rounded-2xl border-2 border-black/[0.08] hover:border-red-300/50 transition-all duration-300"
              style={{ background: "white" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.textDark }}>
                {category.label}
              </h3>
              <p className="text-sm font-semibold tracking-[0.1em] uppercase mb-6" style={{ color: COLORS.primary }}>
                {category.subtitle}
              </p>

              <ul className="space-y-3">
                {WHATS_INCLUDED[category.key as keyof typeof WHATS_INCLUDED].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                      style={{ background: COLORS.primary }}
                    ></span>
                    <span style={{ color: COLORS.textLight }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section
      className="relative py-16 md:py-20 px-6 md:px-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Talk to ORVA Strategist and secure your space
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
            style={{ color: COLORS.primary }}
          >
            Get in Touch
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
