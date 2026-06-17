"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, WHY_ORVA_POINTS, IS_ORVA_RIGHT_PAIN_POINTS, KEY_NUMBERS } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function WhyOrvaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img01.jpeg" alt="Students at university" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/85 to-[#0F0F0F]/60" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
                className="text-lg md:text-xl leading-relaxed max-w-2xl mb-8"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                We are a boutique consultancy dedicated to helping families in the GCC navigate the world&apos;s best universities. Not rankings, not templates. Genuine guidance built for your child.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">Talk to Orva</Button>
                <Button href="/how-it-works" variant="secondary" size="lg">See How It Works</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scrolling text strip */}
        <div className="py-4 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <ScrollRevealStrip direction="left">
            <span className="text-[clamp(16px,2vw,22px)] font-bold text-white/10 uppercase tracking-[0.2em]">
              Strategy &bull; Profile Building &bull; Applications &bull; Family Support &bull; Career Futures &bull; Personalised Guidance &bull; Strategy &bull; Profile Building &bull; Applications &bull; Family Support &bull; Career Futures &bull; Personalised Guidance
            </span>
          </ScrollRevealStrip>
        </div>

        {/* Six Points — Scroll-based stacking cards */}
        <section className="relative" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-4"
              >
                <span className="label mb-4">What Sets Us Apart</span>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4" style={{ color: COLORS.textDark }}>
                  Six reasons families choose Orva.
                </h2>
              </motion.div>
            </div>
            <StackingSection cards={WHY_ORVA_POINTS} />
          </div>
        </section>

        {/* Is ORVA Right For You */}
        <section className="relative overflow-hidden noise-bg" style={{ background: COLORS.deepBlack }}>
          <Spotlight fill="#D51E20" />
          <FloatingGeometry variant="dark" density="normal" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center relative z-10">
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
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" size="md">Talk to ORVA</Button>
                  <Button href="/quiz" variant="secondary" size="md">Take the Quiz</Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-2 relative h-[800px]"
            >
              <Image src="/images/img03.jpeg" alt="Family guidance" fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F0F0F]" />
              <div className="absolute top-10 right-10 w-32 h-32 animate-spin-slow opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(213,30,32,0.6)" strokeWidth="0.5" strokeDasharray="4 8" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden" style={{ background: COLORS.warmSand }}>
          <GridPattern variant="light" />
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
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4" style={{ color: COLORS.textDark }}>
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
                  className="text-center p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-black mb-3" style={{ color: COLORS.primary }}>{stat.value}</div>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img12.jpeg" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
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
              <p className="text-lg text-white/80 mb-10">— ORVA, Founder</p>
              <Button href="/about-daniela" variant="primary" size="lg">Meet Daniela</Button>
            </motion.div>
          </div>
        </section>

        {/* The Future Section */}
        <section className="relative overflow-hidden" style={{ background: COLORS.warmCream }}>
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[600px] hidden lg:block"
            >
              <Image src="/images/img16.jpeg" alt="Future careers" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FBF9F6]/60" />
              <div className="absolute bottom-12 left-12 w-20 h-20 animate-float">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <rect x="10" y="10" width="60" height="60" fill="none" stroke="rgba(213,30,32,0.3)" strokeWidth="0.5" rx="8" transform="rotate(15 40 40)" />
                </svg>
              </div>
            </motion.div>

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
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" size="lg">Talk to ORVA</Button>
                  <Button href="/how-it-works" variant="secondary" size="lg">Our Process</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StackingSection({ cards }: { cards: typeof WHY_ORVA_POINTS }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${(cards.length + 1) * 50}vh` }}>
      <div className="sticky top-20 h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-3xl mx-auto px-6 h-[400px]">
          {cards.map((card, idx) => (
            <StackCard key={card.number} card={card} index={idx} total={cards.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
}: {
  card: (typeof WHY_ORVA_POINTS)[0];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 0.8) / total;

  const opacity = useTransform(progress, [start, start + 0.03, end, end + 0.05], [0, 1, 1, index === total - 1 ? 1 : 0.4]);
  const scale = useTransform(progress, [start, start + 0.05], [0.9, 1]);
  const y = useTransform(progress, [start, start + 0.06], [80, index * 8]);
  const rotateX = useTransform(progress, [start, start + 0.06], [8, 0]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        rotateX,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: index,
        transformOrigin: "center bottom",
      }}
      className="bg-white rounded-2xl border border-black/[0.06] p-7 md:p-9 shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-start gap-5 md:gap-7">
        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D51E20] via-[#F45104] to-[#FA8322] flex items-center justify-center shadow-lg">
          <span className="text-white text-lg md:text-xl font-black">{card.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-2xl font-bold mb-2" style={{ color: COLORS.textDark }}>{card.title}</h3>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: COLORS.textLight }}>{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
