"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img14.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
      </div>
      <FloatingGeometry variant="dark" density="sparse" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Talk to ORVA Strategist and secure your space
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="/quiz" variant="secondary" size="lg">
              Take the Quiz
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
