"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface StatType {
  value: string;
  label: string;
}

interface CounterCardProps {
  stat: StatType;
  delay: number;
}

export function CounterCard({ stat, delay }: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className="text-4xl md:text-5xl font-black mb-3"
      >
        {stat.value}
      </motion.div>
      <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
        {stat.label}
      </p>
    </motion.div>
  );
}
