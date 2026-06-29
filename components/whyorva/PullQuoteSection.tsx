"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { Button } from "@/components/ui/Button";

export default function PullQuoteSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/img12.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
      </div>
      <FloatingGeometry variant="dark" density="sparse" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="mx-auto mb-8 opacity-30"
          >
            <path
              d="M14 28c-2-1.5-4-4-4-8 0-6 4-12 10-15-4 4-6 8-6 11 0 2 1 4 3 5l-3 7zm20 0c-2-1.5-4-4-4-8 0-6 4-12 10-15-4 4-6 8-6 11 0 2 1 4 3 5l-3 7z"
              fill="white"
            />
          </svg>
          <blockquote className="text-2xl md:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
            We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.
          </blockquote>
          <p className="text-lg text-white/80 mb-10">— Daniela, Founder</p>
          <Button href="/about-daniela" variant="primary" size="lg">
            Meet Daniela
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
