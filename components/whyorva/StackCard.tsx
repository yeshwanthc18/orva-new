"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface StackCardProps {
  card: any;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export function StackCard({
  card,
  index,
  total,
  progress,
}: StackCardProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.08, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, start + 0.05],
    [0.92, 1]
  );

  const y = useTransform(
    progress,
    [start, start + 0.05],
    [80, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
      }}
      className="absolute inset-0"
    >
      <div
        className="
        overflow-hidden
        rounded-[36px]
        bg-white
        border
        border-black/5
        shadow-[0_40px_120px_rgba(0,0,0,.08)]
        h-full
        "
      >
        <div className="grid lg:grid-cols-12 h-full">

          {/* Left */}

          <div className="lg:col-span-5 relative h-[260px] lg:h-full">

            <Image
              src={`/images/reason${index + 1}.jpg`}
              alt={card.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

            <div className="absolute left-8 bottom-8">

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-white/15
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-white
                text-3xl
                font-black
                border
                border-white/20
                "
              >
                {card.number}
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-7 flex items-center">

            <div className="max-w-xl px-10 lg:px-14">

              <span
                className="
                uppercase
                tracking-[0.3em]
                text-xs
                font-bold
                "
                style={{
                  color: COLORS.primary,
                }}
              >
                WHY IT MATTERS
              </span>

              <h3
                className="mt-6 font-black leading-tight"
                style={{
                  color: COLORS.textDark,
                  fontSize: "clamp(2rem,3vw,3.2rem)",
                }}
              >
                {card.title}
              </h3>

              <p
                className="mt-8 text-lg leading-9"
                style={{
                  color: COLORS.textLight,
                }}
              >
                {card.description}
              </p>

              <div
                className="
                mt-10
                pt-8
                border-t
                border-black/10
                "
              >

                <div
                  className="uppercase tracking-[0.25em] text-xs"
                  style={{
                    color: COLORS.primary,
                  }}
                >
                  Our Promise
                </div>

                <p
                  className="mt-4 leading-8"
                  style={{
                    color: COLORS.textMuted,
                  }}
                >
                  {card.windowText}
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}