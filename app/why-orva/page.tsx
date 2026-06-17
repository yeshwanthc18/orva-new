"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, WHY_ORVA_POINTS, IS_ORVA_RIGHT_PAIN_POINTS, KEY_NUMBERS } from "@/lib/constants";

export default function WhyOrvaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-white"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white/80">
                  Why Orva
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Six things we do best.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                We are a boutique consultancy dedicated to helping families in the GCC navigate the world&apos;s best universities. Not rankings, not templates. Genuine guidance built for your child.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Six Points Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {WHY_ORVA_POINTS.map((point, idx) => (
                <WhyOrvaCard key={idx} point={point} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Is ORVA Right For You Section */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.deepBlack }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white/60">
                  Is Orva right for you?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Does any of this sound familiar?
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">
                You don&apos;t need to have it all figured out — you just need to see your child somewhere in this.
              </p>
            </motion.div>

            <div className="space-y-6 mb-12">
              {IS_ORVA_RIGHT_PAIN_POINTS.map((point, idx) => (
                <PainPointItem key={idx} text={point} index={idx} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-10 backdrop-blur-sm"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
                Orva is boutique by choice. Every family receives genuinely personalised guidance — from advisors who represent the world&apos;s best universities and understand what it takes to get there. We follow the industries, we know the careers, and above everything, we care about your child.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: COLORS.primary,
                }}
              >
                Talk to ORVA
                <span className="text-lg">→</span>
              </a>
              <p className="text-sm text-white/50 mt-4">
                If one of those is you, this is the call.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Numbers Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                By The Numbers
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
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
                We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.
              </blockquote>
              <p className="text-lg text-white/80">
                — ORVA, Founder
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Future Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
                  The Future
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: COLORS.textDark }}>
                The degree matters. The career matters more.
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed" style={{ color: COLORS.textLight }}>
                  AI is reshaping every profession. The careers of tomorrow won&apos;t look like the careers of today. Choice of university matters — but only if you&apos;re choosing with the future in mind, not the present.
                </p>
                <p className="text-lg font-semibold leading-relaxed" style={{ color: COLORS.textDark }}>
                  Choosing the right university is important. Choosing the right future is everything.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                  }}
                >
                  Talk to ORVA
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Component for Why Orva Points
function WhyOrvaCard({
  point,
  index,
}: {
  point: { number: string; title: string; description: string };
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="border border-black/[0.08] rounded-lg p-8 md:p-10 hover:border-red-400 transition-all duration-300 hover:shadow-lg"
      style={{ background: "white" }}
    >
      <div className="mb-6">
        <span
          className="text-6xl md:text-7xl font-bold"
          style={{ color: COLORS.primary }}
        >
          {point.number}
        </span>
      </div>
      <h3 className="text-2xl md:text-2xl font-bold mb-4" style={{ color: COLORS.textDark }}>
        {point.title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: COLORS.textLight }}>
        {point.description}
      </p>
    </motion.div>
  );
}

// Component for Pain Points
function PainPointItem({ text, index }: { text: string; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start gap-4"
    >
      <span className="text-2xl text-white/60 flex-shrink-0 mt-1">→</span>
      <p className="text-base md:text-lg text-white/80 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}

// Component for Key Numbers
function KeyNumberCard({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.4 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="text-center"
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
