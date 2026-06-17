"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GridPatternProps {
  variant?: "light" | "dark";
}

export function GridPattern({ variant = "dark" }: GridPatternProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const maskY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const lineColor = variant === "dark" ? "rgba(255,255,255,0.03)" : "rgba(213,30,32,0.04)";
  const dotColor = variant === "dark" ? "rgba(213,30,32,0.15)" : "rgba(213,30,32,0.2)";

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Grid lines */}
      <motion.div style={{ y: maskY }} className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${variant}`} width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={lineColor} strokeWidth="0.5" />
            </pattern>
            <radialGradient id={`grid-fade-${variant}`}>
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id={`grid-mask-${variant}`}>
              <rect width="100%" height="100%" fill={`url(#grid-fade-${variant})`} />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${variant})`} mask={`url(#grid-mask-${variant})`} />
        </svg>
      </motion.div>

      {/* Dot at grid intersections (scattered) */}
      <div className="absolute top-[20%] left-[30%] w-1 h-1 rounded-full" style={{ background: dotColor }} />
      <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full" style={{ background: dotColor }} />
      <div className="absolute bottom-[35%] left-[50%] w-1 h-1 rounded-full" style={{ background: dotColor }} />
      <div className="absolute top-[65%] left-[20%] w-1 h-1 rounded-full" style={{ background: dotColor }} />
      <div className="absolute bottom-[20%] right-[35%] w-1.5 h-1.5 rounded-full" style={{ background: dotColor }} />
    </motion.div>
  );
}
