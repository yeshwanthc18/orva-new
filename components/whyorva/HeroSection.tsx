"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/Button";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img01.jpeg"
          alt="Students at university"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/70 to-[#0F0F0F]/95" />
      </div>
      <FloatingGeometry variant="dark" density="normal" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label mx-auto mb-8">Why Orva</span>
          <TextGenerateEffect
            words="Six things we do differently."
            className="text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-tight mb-8"
            style={{ color: COLORS.warmCream }}
            filter
            duration={0.5}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "rgba(251,249,246,0.7)" }}
          >
            We are a boutique consultancy dedicated to helping families in the GCC navigate the world&apos;s best universities. Not rankings, not templates. Genuine guidance built for your child.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button href="/contact" variant="primary" size="lg">
              Talk to Orva
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
