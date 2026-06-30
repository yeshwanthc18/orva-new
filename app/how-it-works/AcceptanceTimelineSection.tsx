"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ACCEPTANCE_TIMELINE, COLORS } from "@/lib/constants";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import TimelineAccordion from "./TimelineAccordion";
import AcceptanceTimeline from "./TimelineAccordion";

export default function AcceptanceTimelineSection() {
  const [expandedYear, setExpandedYear] = useState<string | null>("Year 9/10");

  return (
    <section
      className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden noise-bg"
      style={{ background: COLORS.warmSand }}
    >
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
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: COLORS.textDark }}
          >
            The families who reach world&apos;s Top 100 universities start
            early.
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: COLORS.textLight }}
          >
            Click your child&apos;s current year. See what the best-prepared
            families have already done — and what&apos;s still possible from
            here.
          </p>
        </motion.div>

        <div className="space-y-4">
          {ACCEPTANCE_TIMELINE.map((timeline) => (
            <AcceptanceTimeline
              key={timeline.year}
              timeline={timeline}
              isExpanded={expandedYear === timeline.year}
              onToggle={() =>
                setExpandedYear(
                  expandedYear === timeline.year ? null : timeline.year,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
