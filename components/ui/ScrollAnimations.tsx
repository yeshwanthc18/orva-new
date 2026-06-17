"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealStripProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export function ScrollRevealStrip({ children, direction = "left" }: ScrollRevealStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-5%"] : ["-5%", "5%"]
  );

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }} className="whitespace-nowrap">
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface RotateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  range?: [number, number];
}

export function RotateOnScroll({ children, className = "", range = [0, 180] }: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], range);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <motion.div ref={ref} style={{ rotate, scale }} className={className}>
      {children}
    </motion.div>
  );
}
