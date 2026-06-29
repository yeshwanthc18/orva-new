"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS, KEY_NUMBERS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { CounterCard } from "@/components/whyorva/CounterCard";

export default function KeyNumbersSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{ background: COLORS.warmSand }}
    >
      <GridPattern variant="light" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/img15.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label mx-auto mb-6">By The Numbers</span>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mt-6"
            style={{ color: COLORS.textDark }}
          >
            The proof is in the outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {KEY_NUMBERS.map((stat, idx) => (
            <CounterCard key={idx} stat={stat} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
