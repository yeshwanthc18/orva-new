"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  children,
}: BentoGridItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group row-span-1 rounded-xl border border-black/[0.06] p-6 transition-all duration-300 hover:border-red-300 hover:shadow-lg bg-white",
        className
      )}
    >
      {header && (
        <div className="mb-4 overflow-hidden rounded-lg">
          {header}
        </div>
      )}
      {icon && <div className="mb-3">{icon}</div>}
      <div className="font-bold text-lg mb-2 text-[#1C1C1C]">{title}</div>
      {description && (
        <div className="text-sm leading-relaxed text-[rgba(28,28,28,0.6)]">
          {description}
        </div>
      )}
      {children}
    </motion.div>
  );
}
