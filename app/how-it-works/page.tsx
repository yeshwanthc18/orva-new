"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import {
  COLORS,
  PROCESS_STEPS,
  ACCEPTANCE_TIMELINE,
  WHATS_INCLUDED,
} from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";
import EventPreheader from "@/components/PreHeader";
import HorizontalProcessScroll from "./HorizontalProcessScroll";
import AcceptanceTimelineSection from "./AcceptanceTimelineSection";
import WhatsIncludedSection from "./WhatsIncludedSection";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";

export default function HowItWorksPage() {
  useLenis();
  const [expandedYear, setExpandedYear] = useState<string | null>("Year 9/10");
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>
      <Cursor />
      <Trail />
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main className="pt-16">
        {/* Hero Section with background image */}
       <HeroSection />

        {/* Scrolling text strip */}
        <div
          className="py-4 overflow-hidden"
          style={{ background: COLORS.deepBlack }}
        >
          <ScrollRevealStrip direction="right">
            <span className="text-[clamp(16px,2vw,22px)] font-bold text-white/10 uppercase tracking-[0.2em]">
              Discover &bull; Plan &bull; Build &bull; Apply &bull; Succeed
              &bull; Discover &bull; Plan &bull; Build &bull; Apply &bull;
              Succeed &bull; Discover &bull; Plan &bull; Build &bull; Apply
              &bull; Succeed
            </span>
          </ScrollRevealStrip>
        </div>

        {/* Process Steps — Horizontal Scroll */}
        <section className="relative" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28"></div>
          <HorizontalProcessScroll />
        </section>

        {/* Acceptance Timeline Section */}
     <AcceptanceTimelineSection />

        {/* What's Included — Cards with icons */}
       <WhatsIncludedSection />

        {/* CTA Strip with background */}
      <CTASection />
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
          <h3
            className="text-xl md:text-2xl font-bold mb-2"
            style={{ color: COLORS.textDark }}
          >
            {timeline.year}
          </h3>
          <p
            className="text-sm font-semibold tracking-[0.1em] uppercase"
            style={{ color: COLORS.primary }}
          >
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-black/[0.06]"
          >
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4
                  className="text-lg font-bold mb-4"
                  style={{ color: COLORS.textDark }}
                >
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
              <div>
                <h4
                  className="text-lg font-bold mb-4"
                  style={{ color: COLORS.textDark }}
                >
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
              <div
                className="p-4 rounded-xl"
                style={{
                  background: `${COLORS.primary}08`,
                  borderLeft: `4px solid ${COLORS.primary}`,
                }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: COLORS.primary }}
                >
                  The window from here
                </p>
                <p style={{ color: COLORS.textLight }}>{timeline.window}</p>
              </div>
              <Button href="/contact" variant="primary" size="md">
                Talk to ORVA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


