"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const COLORS = {
  primary: "#D51E20",
  primaryDark: "#520A0B",
  warmCream: "#FBF9F6",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
};

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmCream }}
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
              Our Process
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 transition-colors"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                style={{ background: `${COLORS.primary}15` }}
              >
                <span className="text-xl font-bold" style={{ color: COLORS.primary }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textDark }}>
                {step.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                {step.description}
              </p>
              <div className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.primary }}>
                {step.timeline}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
