"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackingCard {
  number: string;
  title: string;
  description: string;
}

interface StackingCardsProps {
  cards: StackingCard[];
}

export function StackingCards({ cards }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: `${cards.length * 80 + 20}vh` }} className="relative">
      <div className="sticky top-24 flex items-start justify-center overflow-hidden pt-8 pb-20">
        <div className="relative w-full max-w-3xl mx-auto px-6">
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
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
}: {
  card: StackingCard;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;

  const opacity = useTransform(progress, [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd], [0, 1, 1, index === total - 1 ? 1 : 0.6]);
  const scale = useTransform(progress, [rangeStart, rangeEnd], [0.92, 1]);
  const y = useTransform(progress, [rangeStart, rangeStart + 0.1], [60, 0]);
  const rotate = useTransform(progress, [rangeStart, rangeStart + 0.08], [2, 0]);

  return (
    <motion.div
      style={{ opacity, scale, y, rotate, position: "absolute", top: `${index * 12}px`, left: 0, right: 0 }}
      className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 shadow-lg"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#D51E20] via-[#F45104] to-[#FA8322] flex items-center justify-center">
          <span className="text-white text-xl font-black">{card.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1C1C1C]">{card.title}</h3>
          <p className="text-base leading-relaxed text-[rgba(28,28,28,0.7)]">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
