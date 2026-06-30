"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface StackCardProps {
  card: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export function StackCard({ card, index, total, progress }: StackCardProps) {
  // Calculate normalized progress for this specific card
  // Each card gets active for 1/total of the scroll range
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;

  // Distance from active state: 0 when active, negative when upcoming, positive when past
  const distance = useTransform(progress, [cardStart, cardEnd], [-1, 1]);

  // Clamp for smooth behavior
  const clamped = useTransform(distance, (d) => {
    return Math.max(-2, Math.min(2, d));
  });

  // Smoother stacking effect
  const y = useTransform(clamped, (d) => {
    if (d < 0) return d * 50; // approaching from below
    return d * 40; // moving up and away
  });

  const x = useTransform(clamped, (d) => {
    return d * 15; // subtle horizontal shift
  });

  // Scale: active card is full size, others slightly smaller
  const scale = useTransform(clamped, [-2, 0, 2], [0.92, 1, 0.9]);

  // Opacity: smooth fade out for past cards
  const opacity = useTransform(clamped, (d) => {
    if (d > 0.5) return Math.max(0.3, 1 - (d - 0.5) * 1.4);
    return 1;
  });

  // Z-index: keep active card on top
  const zIndex = useTransform(clamped, (d) => {
    return Math.round(100 - Math.abs(d) * 20);
  });

  return (
    <motion.div
      style={{
        y,
        x,
        scale,
        opacity,
        zIndex,
        position: "absolute",
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="w-[90%] max-w-[900px] h-[500px]"
    >
      <div className="overflow-hidden rounded-[28px] bg-white border border-black/8 shadow-2xl h-full flex flex-col lg:flex-row">
        {/* Left – Image */}
        <div className="lg:w-5/12 relative h-[240px] lg:h-full flex-shrink-0">
          <Image
            src={`/images/reason${index + 1}.jpg`}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          
          {/* Number badge */}
          <div className="absolute left-6 bottom-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl lg:text-3xl font-black border border-white/30 shadow-lg">
              {card.number}
            </div>
          </div>
        </div>

        {/* Right – Content */}
        <div className="lg:w-7/12 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white to-slate-50/50">
          <div className="w-full">
            <span
              className="inline-block uppercase tracking-widest text-xs font-bold mb-4 lg:mb-6"
              style={{ color: COLORS.primary }}
            >
              WHY IT MATTERS
            </span>
            <h3
              className="font-black leading-tight mb-4 lg:mb-6"
              style={{
                color: COLORS.textDark,
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              }}
            >
              {card.title}
            </h3>
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: COLORS.textLight }}
            >
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
