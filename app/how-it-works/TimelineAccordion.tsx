"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCEPTANCE_TIMELINE, COLORS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

function ChevronIcon({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}>
      <path d="M6 3.5 11 8l-5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AcceptanceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = ACCEPTANCE_TIMELINE[activeIndex];
  const total = ACCEPTANCE_TIMELINE.length;

  const goTo = (i: number) => setActiveIndex(Math.max(0, Math.min(total - 1, i)));

  return (
    <div>
      {/* ── Hint strip ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-medium flex items-center gap-2" style={{ color: COLORS.textLight }}>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: COLORS.primary }}
          >
            ←→
          </motion.span>
          Click any year below to explore that stage
        </p>
        <span className="hidden sm:block text-xs font-mono" style={{ color: COLORS.textLight }}>
          {activeIndex + 1} / {total}
        </span>
      </div>

      {/* ── Timeline track ───────────────────────────────────────────── */}
      <div className="relative rounded-2xl p-5 sm:p-6" style={{ background: `${COLORS.primary}06` }}>
        <div className="flex overflow-x-auto no-scrollbar gap-0 -mx-1 px-1">
          {ACCEPTANCE_TIMELINE.map((item, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const isLast = index === total - 1;
            const isHovered = hovered === index;

            return (
              <button
                key={item.year}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex-shrink-0 flex flex-col items-start text-left cursor-pointer pt-1"
                style={{ width: `${Math.max(150, 100 / total)}px`, minWidth: 140 }}
              >
                {!isLast && (
                  <div className="absolute top-[12px] w-full h-[3px] rounded-full bg-black/[0.07] -z-10">
                    <motion.div
                      className="h-full origin-left rounded-full"
                      style={{ background: `linear-gradient(90deg, ${COLORS.primary}, #FA8322)` }}
                      initial={false}
                      animate={{ scaleX: isPast ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}

                {/* node with hover ring + active pulse, so non-active years
                    visibly invite a click instead of looking static */}
                <div className="relative mb-3">
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      style={{ border: `2px solid ${COLORS.primary}` }}
                      initial={{ opacity: 0.6, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : isHovered ? 1.15 : 1,
                      backgroundColor: isActive || isPast ? COLORS.primary : "#ffffff",
                      borderColor: isActive || isPast ? COLORS.primary : isHovered ? COLORS.primary : "rgba(0,0,0,0.18)",
                      boxShadow: isHovered && !isActive ? `0 4px 14px ${COLORS.primary}33` : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative w-[18px] h-[18px] rounded-full border-2"
                  />
                </div>

                <span
                  className="text-sm font-bold transition-colors"
                  style={{ color: isActive ? COLORS.primary : isHovered ? COLORS.textDark : COLORS.textDark }}
                >
                  {item.year}
                </span>
                <span className="text-xs mt-0.5" style={{ color: isActive ? COLORS.textDark : COLORS.textLight }}>
                  {item.age}
                </span>

                <motion.span
                  animate={{ opacity: isActive ? 1 : isHovered ? 0.85 : 0.5 }}
                  className="text-[11px] mt-1 font-medium"
                  style={{ color: COLORS.textLight }}
                >
                  {item.phase}
                </motion.span>

                {!isActive && (
                  <motion.span
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
                    transition={{ duration: 0.15 }}
                    className="text-[11px] font-semibold mt-1.5 flex items-center gap-0.5"
                    style={{ color: COLORS.primary }}
                  >
                    View this stage <ChevronIcon />
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content panel ───────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.year}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_20px_60px_-25px_rgba(20,15,10,0.18)] p-6 sm:p-9"
        >
          <div className="flex items-baseline gap-3 flex-wrap mb-8 pb-6 border-b border-black/[0.06]">
            <h2 className="text-3xl sm:text-[34px] font-bold" style={{ color: COLORS.textDark }}>
              {active.year}
            </h2>
            <span className="text-base" style={{ color: COLORS.textLight }}>
              {active.age}
            </span>
            <span
              className="ml-auto text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full"
              style={{ background: `${COLORS.primary}10`, color: COLORS.primary }}
            >
              {active.phase}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <h3 className="text-[13px] font-bold tracking-[0.08em] uppercase mb-5" style={{ color: COLORS.textLight }}>
                What strongest applicants are already doing
              </h3>
              <ul className="space-y-4">
                {active.strongestAlready.map((item, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span className="font-mono text-xs pt-0.5 flex-shrink-0" style={{ color: COLORS.textLight }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed" style={{ color: COLORS.textDark }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-10 md:border-l border-black/[0.06]">
              <h3 className="text-[13px] font-bold tracking-[0.08em] uppercase mb-5" style={{ color: COLORS.primary }}>
                What ORVA does
              </h3>
              <ul className="space-y-4">
                {active.orvaDoes.map((item, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span className="font-mono text-xs pt-0.5 flex-shrink-0" style={{ color: COLORS.primary }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed font-medium" style={{ color: COLORS.textDark }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 pt-7 border-t border-black/[0.06]">
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1" style={{ color: COLORS.primary }}>
                Opportunity Window
              </p>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
                {active.window}
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md">
              Talk to ORVA
            </Button>
          </div>

          {/* Prev / Next — a second, unambiguous way to move through stages */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex items-center gap-1.5 text-sm font-semibold transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ color: COLORS.textDark }}
            >
              <ChevronIcon dir="left" />
              {activeIndex > 0 ? ACCEPTANCE_TIMELINE[activeIndex - 1].year : "Prev"}
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === total - 1}
              className="flex items-center gap-1.5 text-sm font-semibold transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ color: COLORS.primary }}
            >
              {activeIndex < total - 1 ? ACCEPTANCE_TIMELINE[activeIndex + 1].year : "Next"}
              <ChevronIcon />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}