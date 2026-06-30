"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { COLORS, PROCESS_STEPS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";

function HorizontalProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;

      const track = trackRef.current;

      setMaxTranslate(track.scrollWidth - window.innerWidth);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${PROCESS_STEPS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <span className="label mb-4">The Process</span>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mt-4"
            style={{ color: COLORS.textDark }}
          >
            Four phases. One strategy.
          </h2>
          <p
            className="text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: COLORS.textLight }}
          >
            Scroll to explore each phase of the journey.
          </p>
        </motion.div>

        {/* Cards container */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-8 pl-6 md:pl-12 pt-16"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-lg h-full">
                {/* Image */}
                <div className="relative h-[200px] lg:h-auto lg:col-span-5">
                  <Image
                    src={`/images/image${idx + 1}.png`}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white bg-gradient-to-br from-[#D51E20] via-[#F45104] to-[#FA8322] shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 animate-spin-slow opacity-30">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        fill="none"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="0.5"
                        strokeDasharray="3 5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-xs font-bold tracking-[0.15em] uppercase">
                    <span style={{ color: COLORS.primary }}>{step.year}</span>
                    <span style={{ color: COLORS.textMuted }}>
                      &bull; {step.age}
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: COLORS.textDark }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-6"
                    style={{ color: COLORS.textLight }}
                  >
                    {step.description}
                  </p>
                  <div
                    className="pt-4 border-t border-black/[0.06] mt-auto"
                    style={{ color: COLORS.primary }}
                  >
                    <p className="font-semibold text-sm">
                      The window from here
                    </p>
                    <p className="text-sm mt-2 opacity-80">{step.windowText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Progress bar */}
        <div className="absolute bottom-[54px] left-6 right-6 md:left-12 md:right-12 h-[2px] bg-black/[0.06] rounded-full z-20">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] rounded-full"
          />
        </div>

        {/* Step indicators */}
        <div className="absolute bottom-[32px] left-6 right-6 md:left-12 md:right-12 flex justify-between z-20">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322]" />
              <span
                className="text-[9px] font-bold mt-1 tracking-wider uppercase hidden md:block"
                style={{ color: COLORS.textMuted }}
              >
                {step.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HorizontalProcessScroll