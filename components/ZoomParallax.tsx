"use client";

import Picture1 from "@/public/images/img01.jpeg";

import Picture2 from "@/public/images/img02.jpeg";

import Picture3 from "@/public/images/img03.jpeg";

import Picture4 from "@/public/images/img04.jpeg";

import Picture5 from "@/public/images/img05.jpeg";

import Picture6 from "@/public/images/img06.jpeg";

import Picture7 from "@/public/images/img07.jpeg";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  // Layered translation curves for deep parallax spacing

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5.8]);

  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6.5]);

  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8.2]);

  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9.5]);

  // Subtle text fade and spatial drift mapping

  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  // Dynamic overlay opacity mapping: Starts dark for text readability, decreases as you zoom in

  const dynamicOverlayOpacity = useTransform(
    scrollYProgress,

    [0, 0.7],

    [0.65, 0.2],
  );

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      containerClass: "w-[25vw] h-[25vh]",
      hasText: true,
    },
    {
      src: Picture2,
      scale: scale5,
      containerClass: "w-[35vw] h-[30vh] top-[-30vh] left-[5vw]",
    },
    {
      src: Picture3,
      scale: scale6,
      containerClass: "w-[20vw] h-[45vh] top-[-10vh] left-[-25vw]",
    },
    {
      src: Picture4,
      scale: scale5,
      containerClass: "w-[25vw] h-[25vh] left-[27.5vw]",
    },
    {
      src: Picture5,
      scale: scale6,
      containerClass: "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]",
    },
    {
      src: Picture6,
      scale: scale8,
      containerClass: "w-[30vw] h-[25vh] top-[27.5vh] left-[-22.5vw]",
    },
    {
      src: Picture7,
      scale: scale9,
      containerClass: "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
    },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* ── Imagery Horizon Canvas Matrix ── */}

        {pictures.map(({ src, scale, containerClass, hasText }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div
                className={`relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.15)] border border-white/10 ${containerClass}`}
                style={{ background: "#0F0F0F" }}
              >
                {/* ── Text Contrast Shields ── */}

                {hasText ? (
                  <>
                    {/* Living overlay mask that lightens seamlessly as you zoom past it */}

                    <motion.div
                      style={{ opacity: dynamicOverlayOpacity }}
                      className="absolute inset-0 bg-black z-20 pointer-events-none"
                    />

                    {/* Linear subtle bottom dark vignette for structural framing */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-25 pointer-events-none" />
                  </>
                ) : (
                  /* Standard ambient canvas guard for peripheral frames */

                  <div className="absolute inset-0 bg-black/15 z-20 pointer-events-none" />
                )}

                <Image
                  src={src}
                  fill
                  alt="Institutional spaces"
                  placeholder="blur"
                  className="object-cover pointer-events-none select-none"
                  sizes="(max-width: 768px) 40vw, 25vw"
                />
              </div>
            </motion.div>
          );
        })}

        {/* ── Minimalist, Ultra-Legible Typographic Core ── */}

        <motion.div
          style={{
            scale: textScale,

            opacity: textOpacity,

            y: textY,
          }}
          className="relative z-30 pointer-events-none text-center px-6 max-w-xl mx-auto flex flex-col items-center select-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/90 uppercase text-[9px] font-bold tracking-[0.45em] mb-3 block"
          >
            The Global Collective
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-extrabold text-3xl md:text-4xl tracking-[-0.02em] leading-[1.1]"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}
          >
            Architects of{" "}
            <span className="italic font-light opacity-95">Ambition.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.4, width: 24 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="h-[1px] bg-white my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/85 text-xs font-light max-w-[260px] leading-relaxed"
          >
            Scroll to break perspective. Explore our network across world-class
            educational landscapes.
          </motion.p>
        </motion.div>

        {/* ── Secondary Manifesto Reveal Layer (At maximum depth) ── */}

        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.75, 0.95], [0, 1]),

            y: useTransform(scrollYProgress, [0.75, 0.95], [20, 0]),
          }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center w-full max-w-xl px-6"
        >
          <span className="text-[#FA8322] font-extrabold text-[10px] tracking-[0.3em] uppercase block mb-2">
            Legacy Anchored
          </span>

          <p className="text-white text-base md:text-lg font-medium tracking-[-0.01em] leading-relaxed">
            "We build the paths that outlast the simple letters of admission."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
