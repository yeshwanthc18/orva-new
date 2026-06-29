"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COLORS, WHY_ORVA_POINTS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { StackingSection } from "@/components/whyorva/StackingSection";

export default function SixReasons() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: COLORS.warmCream }}
    >
      <GridPattern variant="light" />

      {/* Background Glow */}
      <div
        className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle,#D51E2010 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-16 items-center px-6 lg:px-10 pt-28 lg:pt-36">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span
              className="uppercase text-xs font-bold tracking-[0.35em]"
              style={{
                color: COLORS.primary,
              }}
            >
              WHY ORVA
            </span>

            <h2
              className="mt-8 font-black leading-[0.92]"
              style={{
                color: COLORS.textDark,
                fontSize: "clamp(3rem,6vw,5.5rem)",
              }}
            >
              Six reasons
              <br />
              ambitious families
              <br />
              choose ORVA.
            </h2>

            <p
              className="mt-8 max-w-xl text-lg leading-9"
              style={{
                color: COLORS.textLight,
              }}
            >
              Every decision we make is designed around one goal—
              helping exceptional students gain admission to the
              world's most competitive universities with clarity,
              confidence, and personalised guidance.
            </p>

            <div
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="w-14 h-[2px]"
                style={{
                  background: COLORS.primary,
                }}
              />

              <p
                className="uppercase text-xs tracking-[0.3em]"
                style={{
                  color: COLORS.textMuted,
                }}
              >
                Scroll to discover all six
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[40px]">

              <Image
                src="/images/student-hero.jpg"
                alt="Student"
                width={900}
                height={1100}
                className="w-full h-[640px] object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            </div>

            <div
              className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-xl px-8 py-6 max-w-xs"
            >

              <div
                className="text-5xl font-black"
                style={{
                  color: COLORS.primary,
                }}
              >
                6
              </div>

              <p
                className="mt-2 text-sm uppercase tracking-[0.2em]"
                style={{
                  color: COLORS.textMuted,
                }}
              >
                Principles that define our approach.
              </p>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="px-6 lg:px-10 mt-24">

          <div className="h-px bg-black/10" />

        </div>

        {/* Stack */}

        <div className="mt-14">

          <StackingSection cards={WHY_ORVA_POINTS} />

        </div>

      </div>
    </section>
  );
}