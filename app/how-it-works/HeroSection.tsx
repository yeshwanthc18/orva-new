"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img05.jpeg"
          alt="Students studying"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-[#0F0F0F]/50" />
      </div>
      <FloatingGeometry variant="dark" density="sparse" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label text-white/80 mb-6">How It Works</span>
          <TextGenerateEffect
            words="From dream to admission. And beyond."
            className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-8"
            style={{ color: COLORS.warmCream }}
            filter
            duration={0.5}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            style={{ color: "rgba(251,249,246,0.7)" }}
          >
            One strategist. One family. Minimum one year. Recommended two or
            more. A structured, personalised journey from Year 9 to admission.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
