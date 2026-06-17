"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { COLORS } from "@/lib/constants";

const STATS = [
  { number: "500", label: "Students Guided", suffix: "+" },
  { number: "150", label: "Partner Universities", suffix: "+" },
  { number: "7", label: "Countries Served", suffix: "" },
  { number: "98", label: "Placement Success Rate", suffix: "%" },
];

interface StatItemProps {
  stat: (typeof STATS)[0];
  inView: boolean;
  delay: number;
}

function StatItem({ stat, inView, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(stat.number);

  useEffect(() => {
    if (inView && targetNum > 0) {
      let current = 0;
      const step = Math.ceil(targetNum / 30);
      const timer = setInterval(() => {
        current += step;
        if (current >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [inView, targetNum]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="text-center p-6"
    >
      <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: COLORS.primary }}>
        {count}
        {stat.suffix}
      </div>
      <p className="text-sm font-semibold tracking-[0.1em] uppercase" style={{ color: COLORS.textMuted }}>
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmSand }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            By The Numbers
          </h2>
          <p className="text-lg" style={{ color: COLORS.textLight }}>
            Measurable impact across the GCC and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <StatItem key={idx} stat={stat} inView={inView} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
