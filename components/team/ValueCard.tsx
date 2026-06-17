"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const COLORS = {
  primary: "#D51E20",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
};

interface CompanyValue {
  title: string;
  description: string;
}

interface ValueCardProps {
  value: CompanyValue;
  index: number;
}

export default function ValueCard({ value, index }: ValueCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-6 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 transition-all"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: `${COLORS.primary}20` }}
        >
          <span style={{ color: COLORS.primary }}>●</span>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.textDark }}>
            {value.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
