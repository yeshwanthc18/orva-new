"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import {
  COLORS,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
  KEY_NUMBERS,
} from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";
import EventPreheader from "@/components/PreHeader";
import SixReasons from "./SixReasons";

export default function WhyOrvaPage() {
  useLenis();
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>
      <Cursor />
      <Trail />
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main className="pt-16">
        {/* Hero Section */}
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
                We are a boutique consultancy dedicated to helping families in
                the GCC navigate the world&apos;s best universities. Not
                rankings, not templates. Genuine guidance built for your child.
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
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </section>

        {/* Scrolling text strip */}
        <div
          className="py-5 overflow-hidden"
          style={{ background: COLORS.deepBlack }}
        >
          <ScrollRevealStrip direction="left">
            <span className="text-[clamp(14px,1.8vw,20px)] font-bold text-white/[0.06] uppercase tracking-[0.3em]">
              Strategy &bull; Profile Building &bull; Applications &bull; Family
              Support &bull; Career Futures &bull; Personalised Guidance &bull;
              Strategy &bull; Profile Building &bull; Applications &bull; Family
              Support
            </span>
          </ScrollRevealStrip>
        </div>

   <SixReasons />

        {/* Visual break — Large image with parallax */}
        {/* <ParallaxImageStrip /> */}

        {/* Is ORVA Right For You */}
        <section
          className="relative overflow-hidden noise-bg"
          style={{ background: COLORS.deepBlack }}
        >
          <Spotlight fill="#D51E20" />
          <FloatingGeometry variant="dark" density="normal" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center relative z-10">
            <div className="lg:col-span-3 px-6 md:px-12 py-24 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <span className="label mb-6" style={{ color: COLORS.primary }}>
                  Is Orva right for you?
                </span>
                <h2
                  className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-tight mb-6 mt-6"
                  style={{ color: COLORS.warmCream }}
                >
                  Does any of this sound familiar?
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "rgba(251,249,246,0.6)" }}
                >
                  You don&apos;t need to have it all figured out — you just need
                  to see your child somewhere in this.
                </p>
              </motion.div>

              <div className="space-y-5 mb-12">
                {IS_ORVA_RIGHT_PAIN_POINTS.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#D51E20]/20 to-[#FA8322]/10 border border-red-600/30 group-hover:border-red-500/60 transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1 7h12M8 2l5 5-5 5"
                          stroke="#D51E20"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: COLORS.warmCream }}
                    >
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
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "rgba(251,249,246,0.8)" }}
                >
                  Orva is boutique by choice. Every family receives genuinely
                  personalised guidance — from advisors who represent the
                  world&apos;s best universities and understand what it takes to
                  get there.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" size="md">
                    Talk to ORVA
                  </Button>
                  <Button href="/quiz" variant="secondary" size="md">
                    Take the Quiz
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-2 relative h-[900px]"
            >
              <Image
                src="/images/img03.jpeg"
                alt="Family guidance"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F0F0F]" />
              <div className="absolute top-12 right-12 w-32 h-32 animate-spin-slow opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(213,30,32,0.6)"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Numbers — Full width counter section */}
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

        {/* Pull Quote */}
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
                We are ambitious for every child we advise. But what drives us
                is simple: we want them to thrive — at the world&apos;s best
                universities, and in the life that follows.
              </blockquote>
              <p className="text-lg text-white/80 mb-10">— Orva's Founder</p>
              <Button href="/about-daniela" variant="primary" size="lg">
                Talk to Orva
              </Button>
            </motion.div>
          </div>
        </section>

        {/* The Future Section */}
        <section
          className="relative overflow-hidden"
          style={{ background: COLORS.warmCream }}
        >
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
                src="/images/img05.jpeg"
                alt="Future careers"
                fill
                className="object-cover rounded-lg"
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
                    AI is reshaping every profession. The careers of tomorrow
                    won&apos;t look like the careers of today. Choice of
                    university matters — but only if you&apos;re choosing with
                    the future in mind, not the present.
                  </p>
                  <p
                    className="text-lg font-semibold leading-relaxed"
                    style={{ color: COLORS.textDark }}
                  >
                    Choosing the right university is important. Choosing the
                    right future is everything.
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
      </main>
      <Footer />
    </>
  );
}

function ParallaxImageStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative h-[30vh] md:h-[40vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/img14.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F6] via-transparent to-[#0F0F0F]/90" />
    </div>
  );
}

function CounterCard({
  stat,
  delay,
}: {
  stat: { value: string; label: string };
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className="text-4xl md:text-5xl font-black mb-3 gr"
      >
        {stat.value}
      </motion.div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: COLORS.textLight }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

function StackingSection({ cards }: { cards: typeof WHY_ORVA_POINTS }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(cards.length + 1) * 55}vh` }}
    >
      <div className="sticky top-16 h-[85vh] flex flex-col overflow-hidden">
        {/* Progress indicator */}
        <div className="flex-shrink-0 max-w-3xl mx-auto w-full px-6 pt-6 pb-4">
          <div className="h-[2px] bg-black/[0.06] rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2">
            {cards.map((card) => (
              <span
                key={card.number}
                className="text-[9px] font-bold tracking-wider text-[rgba(28,28,28,0.3)]"
              >
                {card.number}
              </span>
            ))}
          </div>
        </div>

        {/* Cards area */}
        <div className="flex-1 flex items-center justify-center relative px-6">
          <div className="relative w-full max-w-3xl h-[320px] md:h-[280px]">
            {cards.map((card, idx) => (
              <StackCard
                key={card.number}
                card={card}
                index={idx}
                total={cards.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
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

  const opacity = useTransform(
    progress,
    [start, start + 0.04, end, end + 0.06],
    [0, 1, 1, index === total - 1 ? 1 : 0.3],
  );
  const scale = useTransform(progress, [start, start + 0.06], [0.88, 1]);
  const y = useTransform(progress, [start, start + 0.07], [100, index * 6]);
  const rotateX = useTransform(progress, [start, start + 0.06], [10, 0]);

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
        perspective: "1200px",
      }}
      className="bg-white rounded-2xl border border-black/[0.06] p-7 md:p-9 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-start gap-5 md:gap-7">
        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#D51E20] via-[#F45104] to-[#FA8322] flex items-center justify-center shadow-lg">
          <span className="text-white text-lg md:text-xl font-black">
            {card.number}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-lg md:text-2xl font-bold mb-3"
            style={{ color: COLORS.textDark }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: COLORS.textLight }}
          >
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
