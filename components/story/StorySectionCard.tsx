"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";

interface StorySectionProps {
  section: {
    id: string;
    tag: string;
    headline: string;
    description: string;
    isRed: boolean;
    img: string;
  };
  index: number;
}

export default function StorySectionCard({ section, index }: StorySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35, once: false });

  const isRight = index % 2 === 1;
  const isRed = section.isRed === true;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  const clipLeft = useTransform(smoothProgress, [0.15, 0.45], [48, 0]);
  const clipRight = useTransform(smoothProgress, [0.15, 0.45], [52, 100]);

  const clipPathStyle = useTransform(
    [clipLeft, clipRight],
    ([left, right]) =>
      `polygon(${left}% 0%, ${right}% 0%, ${right}% 100%, ${left}% 100%)`
  );

  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.12, 1.03, 1.12]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[80vh] lg:min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden"
      style={{
        background: isRed
          ? `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
          : index % 2 === 0
            ? COLORS.warmCream
            : COLORS.warmSand,
      }}
    >
      <div
        className={`relative lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 z-20 ${
          isRight ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        <div className="flex items-center justify-between w-full opacity-80">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${isRed ? "bg-white" : "bg-red-500"}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${isRed ? "bg-white" : "bg-red-600"}`}
              ></span>
            </span>
            <span
              className="text-[10px] font-bold tracking-[0.35em] uppercase"
              style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
            >
              {section.tag}
            </span>
          </div>
          <span
            className="text-xs font-mono tracking-widest opacity-30"
            style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
          >
            // {section.id}
          </span>
        </div>

        <div className="my-auto max-w-[500px] py-12 lg:py-8">
          <div className="overflow-hidden mb-4 block">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
              className="font-normal tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(30px, 3.8vw, 52px)",
                color: isRed ? "#FFFFFF" : COLORS.textDark,
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {section.headline}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm md:text-base font-light leading-relaxed tracking-wide"
            style={{
              color: isRed ? "rgba(255,255,255,0.78)" : COLORS.textLight,
            }}
          >
            {section.description}
          </motion.p>
        </div>

        <div className="pt-4 lg:pt-0" />
      </div>

      <div
        className={`relative lg:col-span-6 min-h-[40vh] lg:min-h-full overflow-hidden bg-black/5 ${
          isRight ? "order-2 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <motion.div
          style={{ clipPath: clipPathStyle }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <motion.div
            style={{ y: imageTranslateY, scale: imageScale }}
            className="absolute -top-[10%] left-0 w-full h-[120%]"
          >
            <Image
              src={section.img}
              alt={section.tag}
              fill
              priority={index < 2}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/[0.04] mix-blend-multiply pointer-events-none" />
          </motion.div>
        </motion.div>

        <div
          className={`absolute top-0 bottom-0 w-[1px] bg-black/[0.06] hidden lg:block ${
            isRight ? "left-0" : "right-0"
          }`}
        />
      </div>
    </div>
  );
}
