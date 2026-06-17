"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const COLORS = {
  primary: "#D51E20",
  primaryDark: "#520A0B",
  warmCream: "#FBF9F6",
  warmSand: "#F5F2ED",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    features: string[];
    img: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35, once: false });

  const isRight = index % 2 === 1;
  const bgColor = index % 2 === 0 ? COLORS.warmCream : COLORS.warmSand;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[70vh] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden"
      style={{ background: bgColor }}
    >
      {/* Text Content */}
      <div
        className={`relative lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 z-20 ${
          isRight ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full opacity-80">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.textDark }}>
              Service
            </span>
          </div>
          <span className="text-xs font-mono tracking-widest opacity-30" style={{ color: COLORS.textDark }}>
            // {service.id}
          </span>
        </div>

        {/* Content */}
        <div className="my-auto max-w-[500px] py-12 lg:py-8">
          <div className="overflow-hidden mb-4 block">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
              className="font-normal tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: COLORS.textDark,
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {service.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm md:text-base font-light leading-relaxed tracking-wide mb-8"
            style={{ color: COLORS.textLight }}
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 text-sm" style={{ color: COLORS.textMuted }}>
                <span style={{ color: COLORS.primary }}>•</span>
                {feature}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="pt-4 lg:pt-0" />
      </div>

      {/* Image */}
      <div
        className={`relative lg:col-span-6 min-h-[40vh] lg:min-h-full overflow-hidden bg-black/5 ${
          isRight ? "order-2 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <Image
          src={service.img}
          alt={service.title}
          fill
          priority={index < 2}
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/[0.04] mix-blend-multiply pointer-events-none" />
      </div>
    </div>
  );
}
