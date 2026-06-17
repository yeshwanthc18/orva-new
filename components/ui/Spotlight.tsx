"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpacity(1);
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        animate={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "60vw",
          height: "60vh",
        }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background: `radial-gradient(circle, ${fill}22 0%, ${fill}08 30%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function SpotlightHero({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Spotlight fill="#D51E20" />
      {children}
    </div>
  );
}
