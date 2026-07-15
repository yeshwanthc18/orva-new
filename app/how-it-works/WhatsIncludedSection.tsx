"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { COLORS, WHATS_INCLUDED } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";

const CATEGORIES = [
  {
    key: "strategy",
    label: "Strategy",
    subtitle: "Your personalised roadmap",
    img: "/images/img02.jpeg",
  },
  {
    key: "profile",
    label: "Profile",
    subtitle: "Building competitive advantage",
    img: "/images/img06.jpeg",
  },
  {
    key: "applications",
    label: "Applications",
    subtitle: "10–15 universities supported",
    img: "/images/image6.png",
  },
  {
    key: "family",
    label: "Family",
    subtitle: "We support the whole family",
    img: "/images/img03.jpeg",
  },
] as const;

export default function WhatsIncludedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CATEGORIES[activeIndex];
  const items = WHATS_INCLUDED[active.key as keyof typeof WHATS_INCLUDED];

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
      <GridPattern variant="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label mb-4">What&apos;s Included</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            One programme. One strategy.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textLight }}>
            Everything included — not as an upgrade, but as standard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] bg-white border border-black/[0.06] shadow-[0_30px_80px_-35px_rgba(20,15,10,0.22)] overflow-hidden grid lg:grid-cols-[260px_1fr]"
        >
          {/* ── Category rail ─────────────────────────────────────── */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar border-b lg:border-b-0 lg:border-r border-black/[0.06] bg-[#FBF9F6]">
            {CATEGORIES.map((category, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveIndex(idx)}
                  className="relative flex-shrink-0 lg:w-full text-left px-6 py-5 lg:py-6 transition-colors duration-200"
                  style={{ background: isActive ? "white" : "transparent" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="included-indicator"
                      className="absolute left-0 top-0 lg:top-2 lg:bottom-2 right-0 lg:right-auto h-[3px] lg:h-auto lg:w-[3px] bottom-0 lg:rounded-full"
                      style={{ background: `linear-gradient(90deg, ${COLORS.primary}, #FA8322)` }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <div className="flex items-center gap-3 lg:items-start lg:flex-col lg:gap-1">
                    <span
                      className="font-mono text-xs flex-shrink-0"
                      style={{ color: isActive ? COLORS.primary : COLORS.textLight }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span
                        className="block text-base font-bold whitespace-nowrap"
                        style={{ color: isActive ? COLORS.textDark : COLORS.textLight }}
                      >
                        {category.label}
                      </span>
                      <span
                        className="hidden lg:block text-xs mt-0.5 whitespace-nowrap"
                        style={{ color: COLORS.textLight, opacity: isActive ? 1 : 0.7 }}
                      >
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Content panel ─────────────────────────────────────── */}
          <div className="relative min-h-[460px] sm:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid sm:grid-cols-[40%_1fr]"
              >
                <div className="relative h-[180px] sm:h-full">
                  <Image src={active.img} alt={active.label} fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/35 sm:from-transparent sm:to-black/[0.04] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 sm:hidden">
                    <span
                      className="text-xs font-bold tracking-[0.1em] uppercase text-white px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: "rgba(0,0,0,0.35)" }}
                    >
                      {active.subtitle}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-9 lg:p-10">
                  <p
                    className="hidden sm:block text-xs font-bold tracking-[0.14em] uppercase mb-3"
                    style={{ color: COLORS.primary }}
                  >
                    {active.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-[28px] font-bold mb-6" style={{ color: COLORS.textDark }}>
                    {active.label}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
                        className="flex gap-3"
                      >
                        <span
                          className="flex-shrink-0 w-[5px] h-[5px] rounded-full mt-[7px]"
                          style={{ background: COLORS.primary }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <p className="text-center text-sm mt-6" style={{ color: COLORS.textLight }}>
          Click a category above to see what&apos;s included
        </p>
      </div>
    </section>
  );
}