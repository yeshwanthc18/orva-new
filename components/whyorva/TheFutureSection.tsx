"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { Button } from "@/components/ui/Button";

export default function TheFutureSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.warmCream }}>
      <FloatingGeometry variant="light" density="sparse" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[650px] hidden lg:block"
        >
          <Image
            src="/images/img16.jpeg"
            alt="Future careers"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FBF9F6]/60" />
          <div className="absolute bottom-12 left-12 w-20 h-20 animate-float">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                fill="none"
                stroke="rgba(213,30,32,0.3)"
                strokeWidth="0.5"
                rx="8"
                transform="rotate(15 40 40)"
              />
            </svg>
          </div>
        </motion.div>

        <div className="px-8 md:px-16 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label mb-6" style={{ color: COLORS.primary }}>
              The Future
            </span>
            <h2
              className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.12] tracking-tight mb-8 mt-6"
              style={{ color: COLORS.textDark }}
            >
              The degree matters. The career matters more.
            </h2>
            <div className="space-y-5 mb-10">
              <p
                className="text-lg leading-relaxed"
                style={{ color: COLORS.textLight }}
              >
                AI is reshaping every profession. The careers of tomorrow won&apos;t look like the careers of today. Choice of university matters — but only if you&apos;re choosing with the future in mind, not the present.
              </p>
              <p
                className="text-lg font-semibold leading-relaxed"
                style={{ color: COLORS.textDark }}
              >
                Choosing the right university is important. Choosing the right future is everything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Talk to ORVA
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
