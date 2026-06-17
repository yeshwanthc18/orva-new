"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, WHY_ORVA_POINTS, IS_ORVA_RIGHT_PAIN_POINTS, KEY_NUMBERS } from "@/lib/constants";
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight, SpotlightHero } from "@/components/ui/Spotlight";
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
        {/* Hero Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20 md:pb-40">
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
        </LampEffect>

        {/* Six Points Section — Bento Grid */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-6xl mx-auto">
            <BentoGrid className="lg:grid-cols-3">
              {WHY_ORVA_POINTS.map((point, idx) => (
                <BentoGridItem
                  key={idx}
                  className={idx === 0 || idx === 3 ? "md:col-span-2" : ""}
                  title={
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-bold" style={{ color: COLORS.primary }}>{point.number}</span>
                      <span>{point.title}</span>
                    </div>
                  }
                  description={point.description}
                  icon={
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${COLORS.primary}12` }}>
                      <span className="text-sm font-bold" style={{ color: COLORS.primary }}>{point.number}</span>
                    </div>
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Is ORVA Right For You Section */}
        <SpotlightHero>
          <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.deepBlack }}>
            <Spotlight className="absolute top-0 left-0 w-full h-full" fill="#D51E20" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <span className="label mb-6" style={{ color: COLORS.primary }}>Is Orva right for you?</span>
                <h2
                  className="text-[clamp(36px,6vw,56px)] font-bold leading-[1.1] tracking-tight mb-8"
                  style={{ color: COLORS.warmCream }}
                >
                  Does any of this sound familiar?
                </h2>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(251,249,246,0.65)" }}>
                  You don&apos;t need to have it all figured out — you just need to see your child somewhere in this.
                </p>
              </motion.div>

              <div className="space-y-6 mb-12">
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
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: COLORS.warmCream }}>
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
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 backdrop-blur-sm"
              >
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "rgba(251,249,246,0.8)" }}>
                  Orva is boutique by choice. Every family receives genuinely personalised guidance — from advisors who represent the world&apos;s best universities and understand what it takes to get there. We follow the industries, we know the careers, and above everything, we care about your child.
                </p>
                <MovingBorderLink href="/contact" containerClassName="h-12" duration={4000}>
                  Talk to ORVA
                </MovingBorderLink>
                <p className="text-sm mt-4" style={{ color: "rgba(251,249,246,0.45)" }}>
                  If one of those is you, this is the call.
                </p>
              </motion.div>
            </div>
          </section>
        </SpotlightHero>

        {/* Key Numbers Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="label mb-6">By The Numbers</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                The proof is in the outcomes.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {KEY_NUMBERS.map((stat, idx) => (
                <KeyNumberCard key={idx} stat={stat} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Pull Quote Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
                We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.
              </blockquote>
              <p className="text-lg text-white/80">
                — ORVA, Founder
              </p>
            </motion.div>
          </div>
        </LampEffect>

        {/* The Future Section */}
        <LampEffect color="#D51E20" className="dark">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-6" style={{ color: COLORS.primary }}>The Future</span>
              <TextGenerateEffect
                words="The degree matters. The career matters more."
                className="text-[clamp(36px,6vw,56px)] leading-[1.1] tracking-tight mb-8"
                style={{ color: COLORS.textDark }}
                filter
                duration={0.5}
              />
              <div className="space-y-6 mb-10">
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
        </LampEffect>
      </main>
      <Footer />
    </>
  );
}

function KeyNumberCard({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.4, once: true });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="text-center p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg transition-all duration-300"
    >
      <div
        className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
        style={{ color: COLORS.primary }}
      >
        {stat.value}
      </div>
      <p className="text-base leading-relaxed" style={{ color: COLORS.textLight }}>
        {stat.label}
      </p>
    </motion.div>
  );
}
