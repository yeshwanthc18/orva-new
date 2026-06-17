"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS } from "@/lib/constants";

const VALUES = [
  {
    title: "Student First",
    description: "Every decision revolves around student success and well-being",
  },
  {
    title: "Cultural Pride",
    description: "We celebrate and preserve GCC heritage while opening global doors",
  },
  {
    title: "Excellence Standard",
    description: "Highest standards in guidance, service, and personal integrity",
  },
  {
    title: "Long-term Impact",
    description: "We measure success by decades, not just admission day",
  },
];

export default function TeamValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary}15 0%, ${COLORS.primaryDark}15 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto">
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
              Our Culture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            Values That Drive Us
          </h2>
          <p className="text-lg" style={{ color: COLORS.textLight }}>
            These principles define our culture and guide every interaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-8 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${COLORS.primary}20` }}
                >
                  <span style={{ color: COLORS.primary, fontSize: "20px" }}>●</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.textDark }}>
                    {value.title}
                  </h3>
                  <p className="text-sm" style={{ color: COLORS.textMuted }}>
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
