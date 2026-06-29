"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS, IS_ORVA_RIGHT_PAIN_POINTS } from "@/lib/constants";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { Button } from "@/components/ui/Button";

export default function IsOrvaRightSection() {
  return (
    <section
      className="relative overflow-hidden noise-bg"
      style={{ background: COLORS.deepBlack }}
    >
      <Spotlight fill="#D51E20" />
      <FloatingGeometry variant="dark" density="normal" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center relative z-10">
        <div className="lg:col-span-3 px-6 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="label mb-6" style={{ color: COLORS.primary }}>
              Is Orva right for you?
            </span>
            <h2
              className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-tight mb-6 mt-6"
              style={{ color: COLORS.warmCream }}
            >
              Does any of this sound familiar?
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(251,249,246,0.6)" }}
            >
              You don&apos;t need to have it all figured out — you just need to see your child somewhere in this.
            </p>
          </motion.div>

          <div className="space-y-5 mb-12">
            {IS_ORVA_RIGHT_PAIN_POINTS.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#D51E20]/20 to-[#FA8322]/10 border border-red-600/30 group-hover:border-red-500/60 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="#D51E20"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: COLORS.warmCream }}
                >
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(251,249,246,0.8)" }}
            >
              Orva is boutique by choice. Every family receives genuinely personalised guidance — from advisors who represent the world&apos;s best universities and understand what it takes to get there.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="md">
                Talk to ORVA
              </Button>
              <Button href="/quiz" variant="secondary" size="md">
                Take the Quiz
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block lg:col-span-2 relative h-[900px]"
        >
          <Image
            src="/images/img03.jpeg"
            alt="Family guidance"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F0F0F]" />
          <div className="absolute top-12 right-12 w-32 h-32 animate-spin-slow opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(213,30,32,0.6)"
                strokeWidth="0.5"
                strokeDasharray="4 8"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
