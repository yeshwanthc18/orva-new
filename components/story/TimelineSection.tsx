"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COLORS, TIMELINE_EVENTS } from "@/lib/constants";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport width for responsive behaviour
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Line drawing
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Subtle background depth
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97]);

  const eventCount = TIMELINE_EVENTS.length;
  const eventProgressRange = 1 / eventCount;

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: COLORS.warmCream,
        opacity: bgOpacity,
      }}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
              Our History
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            A Timeline of Growth
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line – centered on desktop, left on mobile */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] origin-top"
            style={{ transform: isMobile ? "none" : "translateX(-50%)" }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                scaleY: lineScaleY,
                originY: 0,
                background: `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
                borderRadius: "1px",
              }}
            />
          </div>

          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {TIMELINE_EVENTS.map((item, idx) => {
              const startProgress = idx * eventProgressRange;
              const endProgress = startProgress + eventProgressRange;

              // Responsive slide direction: all from left on mobile, alternating on desktop
              const slideFrom = isMobile ? -30 : idx % 2 === 0 ? -30 : 30;

              const opacity = useTransform(
                scrollYProgress,
                [startProgress, startProgress + eventProgressRange * 0.4, endProgress],
                [0, 1, 1]
              );
              const xOffset = useTransform(
                scrollYProgress,
                [startProgress, startProgress + eventProgressRange * 0.4, endProgress],
                [slideFrom, 0, 0]
              );
              const dotScale = useTransform(
                scrollYProgress,
                [startProgress, startProgress + eventProgressRange * 0.2, endProgress],
                [0.6, 1, 1]
              );

              return (
                <motion.div
                  key={idx}
                  style={{ opacity, x: xOffset }}
                  className={`relative flex md:grid md:grid-cols-2 gap-4 md:gap-0 md:items-center ${
                    !isMobile && idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content block */}
                  <div
                    className={`${
                      !isMobile && idx % 2 === 0
                        ? "md:text-right md:pr-10"
                        : "md:text-left md:pl-10"
                    } pl-10 md:pl-0`}
                  >
                    <div
                      className="text-sm font-bold tracking-[0.2em] uppercase"
                      style={{ color: COLORS.primary }}
                    >
                      {item.year}
                    </div>
                    <h3
                      className="text-lg md:text-xl font-bold mt-1 mb-2"
                      style={{ color: COLORS.textDark }}
                    >
                      {item.event}
                    </h3>
                    <p className="text-sm" style={{ color: COLORS.textMuted }}>
                      {item.detail}
                    </p>
                  </div>

                  {/* Timeline dot – always on the line */}
                  <motion.div
                    style={{
                      transform: isMobile ? "translate(-50%, 0)" : "translate(-50%, -50%)",
                      scale: dotScale,
                      borderColor: COLORS.primary,
                      boxShadow: `0 0 0 4px ${COLORS.warmCream}`,
                    }}
                    className="absolute left-0 md:left-1/2 top-3 md:top-1/2 w-4 h-4 rounded-full bg-white border-[3px] z-10"
               
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}