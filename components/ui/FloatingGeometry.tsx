"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FloatingGeometryProps {
  variant?: "light" | "dark";
  density?: "sparse" | "normal" | "dense";
}

export function FloatingGeometry({ variant = "dark", density = "normal" }: FloatingGeometryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [45, 405]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 1.05]);

  const baseColor = variant === "dark" ? "rgba(213,30,32," : "rgba(213,30,32,";
  const lineColor = variant === "dark" ? "rgba(255,255,255," : "rgba(213,30,32,";

  const shapes = density === "dense" ? 8 : density === "normal" ? 6 : 4;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large rotating ring */}
      <motion.div
        style={{ rotate: rotate1, y: y1, scale: scale1 }}
        className="absolute -top-20 -right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke={`${baseColor}0.06)`} strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke={`${baseColor}0.04)`} strokeWidth="0.3" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="95" fill="none" stroke={`${baseColor}0.03)`} strokeWidth="0.3" />
        </svg>
      </motion.div>

      {/* Medium rotating diamond */}
      <motion.div
        style={{ rotate: rotate2, y: y2, scale: scale2 }}
        className="absolute top-1/3 -left-16 w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke={`${baseColor}0.05)`} strokeWidth="0.4" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke={`${baseColor}0.03)`} strokeWidth="0.3" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      {/* Small rotating triangle */}
      <motion.div
        style={{ rotate: rotate3, y: y3 }}
        className="absolute bottom-1/4 right-[15%] w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,80 10,80" fill="none" stroke={`${baseColor}0.06)`} strokeWidth="0.5" />
          <polygon points="50,25 75,70 25,70" fill="none" stroke={`${baseColor}0.03)`} strokeWidth="0.3" />
        </svg>
      </motion.div>

      {/* Floating dots */}
      {shapes >= 6 && (
        <>
          <motion.div
            style={{ y: y2, background: `${baseColor}0.12)` }}
            className="absolute top-[20%] left-[25%] w-2 h-2 rounded-full"
          />
          <motion.div
            style={{ y: y1, background: `${baseColor}0.08)` }}
            className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full"
          />
          <motion.div
            style={{ y: y3, background: `${baseColor}0.1)` }}
            className="absolute bottom-[30%] left-[40%] w-1.5 h-1.5 rounded-full"
          />
        </>
      )}

      {/* Cross markers */}
      {shapes >= 8 && (
        <>
          <motion.div style={{ rotate: rotate2, y: y1 }} className="absolute top-[15%] right-[30%]">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <line x1="10" y1="3" x2="10" y2="17" stroke={`${lineColor}0.08)`} strokeWidth="0.5" />
              <line x1="3" y1="10" x2="17" y2="10" stroke={`${lineColor}0.08)`} strokeWidth="0.5" />
            </svg>
          </motion.div>
          <motion.div style={{ rotate: rotate1, y: y3 }} className="absolute bottom-[20%] left-[15%]">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <line x1="12" y1="2" x2="12" y2="22" stroke={`${lineColor}0.06)`} strokeWidth="0.5" />
              <line x1="2" y1="12" x2="22" y2="12" stroke={`${lineColor}0.06)`} strokeWidth="0.5" />
            </svg>
          </motion.div>
        </>
      )}

      {/* Orbit path */}
      <motion.div
        style={{ rotate: rotate1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="95" ry="70" fill="none" stroke={`${baseColor}0.025)`} strokeWidth="0.3" strokeDasharray="2 6" />
        </svg>
      </motion.div>
    </div>
  );
}
