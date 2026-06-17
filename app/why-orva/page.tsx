"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, WHY_ORVA_POINTS, IS_ORVA_RIGHT_PAIN_POINTS, KEY_NUMBERS } from "@/lib/constants";
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

export default function WhyOrvaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section with background image */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img01.jpeg" alt="Students at university" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-[#0F0F0F]/60" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label text-white/80 mb-6">Why Orva</span>
              <TextGenerateEffect
                words="Six things we do best."
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
                We are a boutique consultancy dedicated to helping families in the GCC navigate the world&apos;s best universities. Not rankings, not templates. Genuine guidance built for your child.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Six Points Section — Cards with imagery */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_ORVA_POINTS.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`group relative p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/60 hover:shadow-xl transition-all duration-300 overflow-hidden ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                    <Image src={`/images/img${String(idx + 8).padStart(2, '0')}.jpeg`} alt="" fill className="object-cover rounded-2xl" sizes="96px" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-black" style={{ color: COLORS.primary }}>{point.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.textDark }}>{point.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Is ORVA Right For You — Dark section with image */}
        <section className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <Spotlight fill="#D51E20" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center relative z-10">
            {/* Content */}
            <div className="lg:col-span-3 px-6 md:px-12 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <span className="label mb-6" style={{ color: COLORS.primary }}>Is Orva right for you?</span>
                <h2 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-tight mb-6" style={{ color: COLORS.warmCream }}>
                  Does any of this sound familiar?
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(251,249,246,0.65)" }}>
                  You don&apos;t need to have it all figured out — you just need to see your child somewhere in this.
                </p>
              </motion.div>

              <div className="space-y-5 mb-10">
                {IS_ORVA_RIGHT_PAIN_POINTS.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600/10 border border-red-600/30 group-hover:bg-red-600/20 transition-colors">
                      <span className="text-red-500 text-lg font-bold">&rarr;</span>
                    </div>
                    <p className="text-lg leading-relaxed" style={{ color: COLORS.warmCream }}>{point}</p>
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
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(251,249,246,0.8)" }}>
                  Orva is boutique by choice. Every family receives genuinely personalised guidance — from advisors who represent the world&apos;s best universities and understand what it takes to get there.
                </p>
                <MovingBorderLink href="/contact" containerClassName="h-12" duration={4000}>
                  Talk to ORVA
                </MovingBorderLink>
              </motion.div>
            </div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-2 relative h-[800px]"
            >
              <Image src="/images/img03.jpeg" alt="Family guidance" fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F0F0F]" />
            </motion.div>
          </div>
        </section>

        {/* Key Numbers Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden" style={{ background: COLORS.warmSand }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <Image src="/images/img15.jpeg" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="label mb-6">By The Numbers</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: COLORS.textDark }}>
                The proof is in the outcomes.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {KEY_NUMBERS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-black mb-3" style={{ color: COLORS.primary }}>{stat.value}</div>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull Quote with background */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img12.jpeg" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
                We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.
              </blockquote>
              <p className="text-lg text-white/80">— ORVA, Founder</p>
            </motion.div>
          </div>
        </section>

        {/* The Future Section */}
        <section className="relative overflow-hidden" style={{ background: COLORS.warmCream }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[600px] hidden lg:block"
            >
              <Image src="/images/img16.jpeg" alt="Future careers" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FBF9F6]/60" />
            </motion.div>

            {/* Content */}
            <div className="px-8 md:px-16 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="label mb-6" style={{ color: COLORS.primary }}>The Future</span>
                <h2 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight mb-8" style={{ color: COLORS.textDark }}>
                  The degree matters. The career matters more.
                </h2>
                <div className="space-y-5 mb-8">
                  <p className="text-lg leading-relaxed" style={{ color: COLORS.textLight }}>
                    AI is reshaping every profession. The careers of tomorrow won&apos;t look like the careers of today. Choice of university matters — but only if you&apos;re choosing with the future in mind, not the present.
                  </p>
                  <p className="text-lg font-semibold leading-relaxed" style={{ color: COLORS.textDark }}>
                    Choosing the right university is important. Choosing the right future is everything.
                  </p>
                </div>
                <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                  Talk to ORVA
                </MovingBorderLink>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
