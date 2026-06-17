"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampEffectProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export function LampEffect({
  className,
  children,
  color = "#D51E20",
}: LampEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn("relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden w-full z-0", className)}
    >
      {/* Left gradient cone */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, width: "8rem" }}
          animate={inView ? { opacity: 1, width: "28rem" } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[60%] z-20"
          style={{
            background: `conic-gradient(from 70deg at 50% 0%, ${color}22 0deg, transparent 150deg, transparent 210deg, ${color}11 360deg)`,
          }}
        />
      </div>

      {/* Center glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        style={{
          width: "40rem",
          height: "20rem",
          background: `radial-gradient(ellipse at center, ${color}15 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Bottom blur layer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-30"
        style={{
          background: `linear-gradient(to top, ${className?.includes("dark") ? "#0F0F0F" : "#FBF9F6"}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-40 w-full">{children}</div>
    </div>
  );
}
