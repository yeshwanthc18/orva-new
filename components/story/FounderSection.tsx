"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";

export default function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmSand }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/img04.jpeg"
              alt="Founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/[0.08]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
                Founder's Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
              Visionary Leadership
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
              Founded by an education visionary with 15+ years of experience in international university admissions and student placement, ORVA was born from a deep understanding of the unique challenges faced by GCC families.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
              Our founder&apos;s personal journey navigating cultural boundaries and academic excellence inspired the creation of a service that bridges worlds—connecting ambitious GCC students to opportunities that align with their values and aspirations.
            </p>

            <div className="border-t border-black/[0.1] pt-6 mt-6">
              <h3 className="text-sm font-bold tracking-[0.15em] uppercase mb-4" style={{ color: COLORS.primary }}>
                Founder&apos;s Commitment
              </h3>
              <ul className="space-y-3">
                {[
                  "Personalized guidance for every student",
                  "Excellence in every interaction",
                  "Cultural integrity in global context",
                  "Long-term student success",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm" style={{ color: COLORS.textLight }}>
                    <span style={{ color: COLORS.primary }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
