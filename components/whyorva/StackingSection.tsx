"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { WHY_ORVA_POINTS, COLORS } from "@/lib/constants";
import { StackCard } from "./StackCard";

interface StackingSectionProps {
  cards: typeof WHY_ORVA_POINTS;
}

export function StackingSection({
  cards,
}: StackingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: `${cards.length * 90}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#FBF9F6]">

        {/* Top */}

        <div className="w-full border-b border-black/5 bg-[#FBF9F6]/90 backdrop-blur-xl">

          <div className="max-w-[1700px] mx-auto px-8 lg:px-16 py-8">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

              <div>

                <span
                  className="uppercase text-xs font-bold tracking-[0.35em]"
                  style={{
                    color: COLORS.primary,
                  }}
                >
                  WHY ORVA
                </span>

                <h3
                  className="mt-4 font-black leading-none"
                  style={{
                    color: COLORS.textDark,
                    fontSize:
                      "clamp(2rem,3vw,3.25rem)",
                  }}
                >
                  Six principles.
                  <br />
                  One proven approach.
                </h3>

              </div>

              <div
                className="max-w-sm text-sm leading-7"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Follow the journey below to
                discover what makes our
                admissions strategy different.
              </div>

            </div>

            {/* Progress */}

            <div className="relative mt-10">

              <div className="h-[2px] bg-black/10 rounded-full">

                <motion.div
                  style={{
                    width: progressWidth,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322]"
                />

              </div>

              <div className="grid grid-cols-6 mt-5">

                {cards.map((card) => (

                  <div
                    key={card.number}
                    className="flex flex-col items-center"
                  >

                    <div
                      className="
                      w-3
                      h-3
                      rounded-full
                      bg-[#D51E20]
                      shadow-[0_0_0_5px_rgba(213,30,32,.08)]
                      "
                    />

                    <span
                      className="
                      mt-3
                      text-[11px]
                      font-bold
                      tracking-[0.25em]
                      uppercase
                      "
                      style={{
                        color: COLORS.textMuted,
                      }}
                    >
                      {card.number}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

                {/* Card Area */}

        <div className="flex-1 flex items-center justify-center px-5 lg:px-10 py-10">

          <div
            className="
            relative
            w-[96vw]
            max-w-[1800px]
            h-[680px]
            "
          >
            {cards.map((card, index) => (
              <StackCard
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