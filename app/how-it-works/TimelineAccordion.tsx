"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCEPTANCE_TIMELINE, COLORS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function AcceptanceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = ACCEPTANCE_TIMELINE[activeIndex];

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
      {/* Sidebar */}
      <div className="space-y-4">
        {ACCEPTANCE_TIMELINE.map((item, index) => {
          const activeTab = index === activeIndex;

          return (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className={`relative w-full text-left rounded-2xl p-5 transition-all duration-300 border
              ${
                activeTab
                  ? "bg-white shadow-xl border-red-200"
                  : "bg-gray-50 hover:bg-white hover:shadow-md border-transparent"
              }`}
            >
              {activeTab && (
                <motion.div
                  layoutId="timeline-indicator"
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                  style={{ background: COLORS.primary }}
                />
              )}

              <div className="pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      activeTab ? "bg-red-600 border-red-600" : "border-gray-400"
                    }`}
                  />

                  <span
                    className="text-xl font-bold"
                    style={{
                      color: activeTab
                        ? COLORS.primary
                        : COLORS.textDark,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <p
                  className="font-semibold"
                  style={{ color: COLORS.textDark }}
                >
                  {item.age}
                </p>

                <p
                  className="text-sm mt-1"
                  style={{ color: COLORS.textLight }}
                >
                  {item.phase}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.year}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-black/5 bg-white shadow-xl p-8 md:p-10"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-sm font-semibold mb-3"
                style={{
                  background: `${COLORS.primary}12`,
                  color: COLORS.primary,
                }}
              >
                {active.phase}
              </span>

              <h2
                className="text-4xl font-bold"
                style={{ color: COLORS.textDark }}
              >
                {active.year}
              </h2>

              <p
                className="mt-2 text-lg"
                style={{ color: COLORS.textLight }}
              >
                {active.age}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strongest Applicants */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3
                className="font-bold text-lg mb-5"
                style={{ color: COLORS.textDark }}
              >
                🏆 What the strongest applicants are already doing
              </h3>

              <ul className="space-y-4">
                {active.strongestAlready.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ background: COLORS.primary }}
                    />
                    <span style={{ color: COLORS.textLight }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ORVA */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3
                className="font-bold text-lg mb-5"
                style={{ color: COLORS.textDark }}
              >
                🚀 What ORVA does
              </h3>

              <ul className="space-y-4">
                {active.orvaDoes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ background: COLORS.primary }}
                    />
                    <span style={{ color: COLORS.textLight }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Window */}
          <div
            className="mt-8 rounded-2xl p-6"
            style={{
              background: `${COLORS.primary}08`,
              borderLeft: `5px solid ${COLORS.primary}`,
            }}
          >
            <p
              className="font-semibold mb-2"
              style={{ color: COLORS.primary }}
            >
              Opportunity Window
            </p>

            <p style={{ color: COLORS.textLight }}>{active.window}</p>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}