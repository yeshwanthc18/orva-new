"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS, MISSION_PILLARS } from "@/lib/constants";

export default function MissionVisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-white"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/80">
              Our Purpose
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span style={{ fontSize: "24px", color: "#FA8322" }}>◆</span>
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              To empower ambitious GCC students by providing personalized, culturally-aware guidance that opens doors to world-class universities while preserving the values that define them. We measure success not by admissions alone, but by the confident, thriving global citizens they become.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span style={{ fontSize: "24px", color: "#FA8322" }}>✦</span>
              Our Vision
            </h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              A world where every ambitious GCC student has access to exceptional guidance and global opportunities—where cultural identity and academic excellence coexist seamlessly. Where success is measured by the impact we create in the lives of families, not just the rankings of universities.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-bold text-white/90 mb-8 text-center"
          >
            Core Pillars
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h4 className="text-white font-semibold mb-2">{pillar.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
