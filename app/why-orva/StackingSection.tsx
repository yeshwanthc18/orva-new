"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { COLORS } from "@/lib/constants";
import Image from "next/image";

interface Principle {
  number: string;
  title: string;
  description: string;
}

interface StackingSectionProps {
  cards: Principle[];
}

// ── Single card, slides up from below and settles, then slides up and out
// as the next one takes over. No overlapping stack — one principle owns
// the screen at a time, which reads cleaner and avoids z-index fighting.
function PrincipleCard({
  card,
  index,
  total,
  progress,
}: {
  card: Principle;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // enter (start→mid quarter), hold, exit (last quarter→end)
  const inEnd = start + (end - start) * 0.28;
  const outStart = end - (end - start) * 0.28;

  const rawY = useTransform(
    progress,
    [start, inEnd, outStart, end],
    [64, 0, 0, -64]
  );
  const y = useSpring(rawY, { stiffness: 220, damping: 32, mass: 0.6 });

  const opacity = useTransform(
    progress,
    [start, inEnd, outStart, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, inEnd, outStart, end],
    [0.97, 1, 1, 0.97]
  );

  return (
    <motion.div
      style={{ opacity, y, scale, pointerEvents: "none" }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-5xl rounded-[20px] bg-white border border-black/[0.06] shadow-[0_30px_80px_-30px_rgba(20,15,10,0.25)] overflow-hidden flex flex-col lg:flex-row h-[480px] lg:h-[460px]">
        <div className="lg:w-[42%] relative h-[200px] lg:h-full flex-shrink-0">
          <Image
            src={`/images/reason${index + 1}.jpg`}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
        </div>

        <div className="lg:w-[58%] flex flex-col justify-center p-8 sm:p-10 lg:p-14">
          <span
            className="font-mono text-[90px] lg:text-[110px] leading-none font-bold select-none -ml-1 mb-2"
            style={{ color: "rgba(213,30,32,0.08)" }}
          >
            {card.number}
          </span>
          <span
            className="uppercase tracking-[0.2em] text-xs font-bold mb-3 -mt-10 lg:-mt-12"
            style={{ color: COLORS.primary }}
          >
            Principle {card.number}
          </span>
          <h3
            className="font-black leading-[1.08] mb-4"
            style={{ color: COLORS.textDark, fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }}
          >
            {card.title}
          </h3>
          <p className="text-base lg:text-[17px] leading-relaxed max-w-md" style={{ color: COLORS.textLight }}>
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Index rail — a real table-of-contents that tracks scroll, not a row
// of dots. Active label scales up and gets an animated underline.
function IndexRail({
  cards,
  progress,
}: {
  cards: Principle[];
  progress: MotionValue<number>;
}) {
  return (
    <div className="hidden lg:flex flex-col gap-1 w-[180px] flex-shrink-0">
      {cards.map((card, idx) => {
        const start = idx / cards.length;
        const end = (idx + 1) / cards.length;
        return <RailItem key={card.number} card={card} start={start} end={end} progress={progress} />;
      })}
    </div>
  );
}

function RailItem({
  card,
  start,
  end,
  progress,
}: {
  card: Principle;
  start: number;
  end: number;
  progress: MotionValue<number>;
}) {
  const mid = (start + end) / 2;
  const opacity = useTransform(progress, [start, mid, end], [0.35, 1, 0.35]);
  const lineScale = useSpring(useTransform(progress, [start, mid, end], [0, 1, 0]), {
    stiffness: 200,
    damping: 28,
  });
  const textScale = useSpring(useTransform(progress, [start, mid, end], [0.92, 1, 0.92]), {
    stiffness: 200,
    damping: 28,
  });

  return (
    <motion.div style={{ opacity }} className="py-3 border-t border-black/[0.06] first:border-t-0">
      <motion.div style={{ scaleX: lineScale }} className="h-[2px] origin-left mb-2 bg-gradient-to-r from-[#D51E20] to-[#FA8322]" />
      <motion.div style={{ scale: textScale }} className="origin-left">
        <span className="block font-mono text-[11px] tracking-widest mb-0.5" style={{ color: COLORS.primary }}>
          {card.number}
        </span>
        <span className="block text-sm font-semibold leading-snug" style={{ color: COLORS.textDark }}>
          {card.title}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function StackingSection({ cards }: StackingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${Math.max(cards.length * 110, 700)}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative z-20 border-b border-black/[0.06] bg-[#FBF9F6]/70 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <span className="uppercase text-xs font-bold tracking-[0.22em] block mb-3" style={{ color: COLORS.primary }}>
                  Why Orva
                </span>
                <h2
                  className="font-black leading-[1.05]"
                  style={{ color: COLORS.textDark, fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
                >
                  Six principles. One proven approach.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed flex-shrink-0" style={{ color: COLORS.textLight }}>
                Scroll to move through each principle, in order.
              </p>
            </div>

            {/* overall progress */}
            <div className="h-[2px] bg-black/[0.06] rounded-full overflow-hidden mt-7">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full origin-left bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322]"
              />
            </div>
          </div>
        </div>

        {/* Body: rail + card stage */}
        <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-10 lg:py-12 flex gap-10 lg:gap-16">
          <IndexRail cards={cards} progress={scrollYProgress} />
          <div className="relative flex-1">
            {cards.map((card, index) => (
              <PrincipleCard
                key={card.number}
                card={card}
                index={index}
                total={cards.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}