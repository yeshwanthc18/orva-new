"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import {
  COLORS,
  HERO_STATS,
  UNIVERSITY_MARQUEE,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
} from "@/lib/constants";

export default function Page() {
  useLenis();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <>
      <Cursor />
      <Trail />
      <Loader />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* UNIVERSITY MARQUEE SECTION */}
        <UniversityMarquee />

        {/* WHAT WE DO SECTION */}
        <WhatWeDoSection />

        {/* IS ORVA RIGHT FOR YOU SECTION */}
        <IsOrvaRightSection />

        {/* KEY NUMBERS SECTION */}
        <KeyNumbersSection />

        {/* WHY ORVA SECTION */}
        <WhyOrvaSection />

        {/* THE FUTURE SECTION */}
        <TheFutureSection />

        {/* CTA STRIP SECTION */}
        <CtaStripSection />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   UNIVERSITY MARQUEE SECTION
   ───────────────────────────────────────────────────────────────── */
function UniversityMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 0",
        background: COLORS.warmCream,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 0,
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Duplicated marquee content for seamless loop */}
        {[0, 1].map((key) => (
          <motion.div
            key={key}
            initial={{ x: key === 0 ? 0 : "100%" }}
            animate={{ x: key === 0 ? "-100%" : "0%" }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            style={{
              display: "flex",
              gap: 40,
              whiteSpace: "nowrap",
              minWidth: "100%",
            }}
          >
            {UNIVERSITY_MARQUEE.map((uni, i) => (
              <div
                key={`${key}-${i}`}
                style={{
                  fontSize: "clamp(20px, 3vw, 32px)",
                  fontWeight: 600,
                  color: COLORS.textDark,
                  letterSpacing: "-0.01em",
                  fontFamily: "Cairo, sans-serif",
                  flexShrink: 0,
                }}
              >
                {uni}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WHAT WE DO SECTION
   ───────────────────────────────────────────────────────────────── */
function WhatWeDoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: COLORS.warmCream,
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.primary,
            marginBottom: 20,
          }}
        >
          What We Do
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: COLORS.textDark,
            marginBottom: 32,
            fontFamily: "Cairo, sans-serif",
          }}
        >
          The right university. The right major. The right future.
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: COLORS.textLight,
            marginBottom: 40,
          }}
        >
          ORVA is a boutique university admissions consultancy for families in the UAE and Saudi Arabia. We work with ambitious students from Year 9 onwards, building a deliberate path to Oxford, Cambridge, the Ivy League, and Europe's finest universities — and beyond, to a future-proof career they genuinely want to build.
        </motion.p>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            padding: "32px 0",
            borderTop: `1px solid rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.2)`,
            borderBottom: `1px solid rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.2)`,
            marginBottom: 40,
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.6,
              color: COLORS.textDark,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            "We serve you. Not universities."
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: COLORS.textMuted,
              marginTop: 12,
              margin: "12px 0 0 0",
            }}
          >
            — ORVA Founder
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: COLORS.primary,
              color: COLORS.warmCream,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 8px 24px rgba(213, 30, 32, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(213, 30, 32, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(213, 30, 32, 0.2)";
            }}
          >
            Talk to Daniela
            <svg
              width="14"
              height="14"
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

/* ─────────────────────────────────────────────────────────────────
   IS ORVA RIGHT FOR YOU SECTION
   ───────────────────────────────────────────────────────────────── */
function IsOrvaRightSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: COLORS.deepBlack,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.primary,
            marginBottom: 20,
          }}
        >
          Is Orva Right For You?
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: COLORS.warmCream,
            marginBottom: 60,
            fontFamily: "Cairo, sans-serif",
          }}
        >
          Does any of this sound familiar?
        </motion.h2>

        {/* Pain points grid */}
        <div
          style={{
            display: "grid",
            gap: 32,
            marginBottom: 60,
          }}
        >
          {IS_ORVA_RIGHT_PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  color: COLORS.primary,
                  fontWeight: 700,
                  marginTop: 4,
                  flexShrink: 0,
                }}
              >
                →
              </div>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: COLORS.warmCream,
                  margin: 0,
                }}
              >
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(251, 249, 246, 0.75)",
            marginBottom: 40,
          }}
        >
          If any of these feel true, ORVA exists to solve exactly this. We've spent 15+ years building a process that turns ambition into admission, and admission into a thriving first year at university.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: COLORS.primary,
              color: COLORS.warmCream,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 8px 24px rgba(213, 30, 32, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(213, 30, 32, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(213, 30, 32, 0.2)";
            }}
          >
            Talk to ORVA
            <svg
              width="14"
              height="14"
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

/* ─────────────────────────────────────────────────────────────────
   KEY NUMBERS SECTION
   ───────────────────────────────────────────────────────────────── */
function KeyNumbersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: COLORS.warmCream,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              color: COLORS.textDark,
              margin: 0,
              fontFamily: "Cairo, sans-serif",
            }}
          >
            What Sets Us Apart
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 40,
          }}
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 8vw, 56px)",
                  fontWeight: 900,
                  color: COLORS.primary,
                  marginBottom: 12,
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: COLORS.textLight,
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WHY ORVA SECTION
   ───────────────────────────────────────────────────────────────── */
function WhyOrvaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: COLORS.deepBlack,
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.primary,
            marginBottom: 20,
          }}
        >
          Why Orva
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: COLORS.warmCream,
            marginBottom: 60,
            fontFamily: "Cairo, sans-serif",
          }}
        >
          Six things we do best.
        </motion.h2>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {WHY_ORVA_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              style={{
                padding: 32,
                background: `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.08)`,
                border: `1px solid rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.2)`,
                borderRadius: 12,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.5)`;
                el.style.background = `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.15)`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.2)`;
                el.style.background = `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.08)`;
                el.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 900,
                  color: COLORS.primary,
                  marginBottom: 16,
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                {point.number}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: COLORS.warmCream,
                  marginBottom: 12,
                  margin: "0 0 12px 0",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(251, 249, 246, 0.7)",
                  margin: 0,
                }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            marginTop: 80,
            padding: "40px",
            borderLeft: `4px solid ${COLORS.primary}`,
            background: `rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.05)`,
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.8,
              color: COLORS.warmCream,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            "When a student arrives at university, the real journey begins. We don't just get them through the door — we prepare them to walk through with confidence and thrive on the other side."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   THE FUTURE SECTION
   ───────────────────────────────────────────────────────────────── */
function TheFutureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -150px 0px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px",
        background: COLORS.warmCream,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.primary,
            marginBottom: 20,
          }}
        >
          The Future
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: COLORS.textDark,
            marginBottom: 32,
            fontFamily: "Cairo, sans-serif",
          }}
        >
          Your child's career in a world that's changing.
        </motion.h2>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "grid", gap: 24 }}
        >
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: COLORS.textLight,
              margin: 0,
            }}
          >
            AI isn't coming to the job market — it's already here. Every industry is reshaping. Every profession is changing. The universities your child attends, the subjects they study, and the skills they develop will define whether they lead the change or fall behind it.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: COLORS.textLight,
              margin: 0,
            }}
          >
            ORVA's entire approach to university selection and career planning is built around this reality. We don't place your child at a university and call it a win. We ask: what is their genuine strength? What world are they entering? What path will still matter in a decade?
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: COLORS.textLight,
              margin: 0,
            }}
          >
            This is why families in the UAE and Saudi Arabia turn to us. Because getting into Oxford is a moment. Building the right career is a lifetime.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginTop: 40 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: COLORS.primary,
              color: COLORS.warmCream,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 8px 24px rgba(213, 30, 32, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(213, 30, 32, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(213, 30, 32, 0.2)";
            }}
          >
            Talk to ORVA
            <svg
              width="14"
              height="14"
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

/* ─────────────────────────────────────────────────────────────────
   CTA STRIP SECTION
   ───────────────────────────────────────────────────────────────── */
function CtaStripSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        padding: "60px 24px",
        background: COLORS.deepBlack,
        borderTop: `1px solid rgba(${parseInt(COLORS.primary.slice(1, 3), 16)}, ${parseInt(COLORS.primary.slice(3, 5), 16)}, ${parseInt(COLORS.primary.slice(5, 7), 16)}, 0.2)`,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.3,
            color: COLORS.warmCream,
            marginBottom: 40,
            fontFamily: "Cairo, sans-serif",
          }}
        >
          The window is shorter than most families realize.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(251, 249, 246, 0.7)",
            marginBottom: 40,
          }}
        >
          The families who reach Oxford, Cambridge, and the Ivy League don't start in Year 13. They start in Year 9. The decisions made now will shape your child's admission odds and their entire future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 40px",
              background: COLORS.primary,
              color: COLORS.warmCream,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 12px 32px rgba(213, 30, 32, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(213, 30, 32, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(213, 30, 32, 0.3)";
            }}
          >
            Talk to ORVA Strategist
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
