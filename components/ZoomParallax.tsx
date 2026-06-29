"use client";

import Picture1 from "@/public/images/img01.jpeg";

import Picture2 from "@/public/images/img02.jpeg";

import Picture3 from "@/public/images/img03.jpeg";

import Picture4 from "@/public/images/img09.jpeg";

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
                className={`relative overflow-hidden rounded-md ${containerClass}`}
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
            className="text-white/90 uppercase text-[14px] font-bold tracking-[0.45em] block"
          >
            What We Do
          </motion.span>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.4, width: 24 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="h-[1px] bg-white my-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/85 text-lg font-light max-w-[260px] leading-relaxed"
          >
            The right university. The right major. The right future.
          </motion.p>
        </motion.div>

        {/* ── Secondary Manifesto Reveal Layer (At maximum depth) ── */}

       {/* ── Cinematic Manifesto Reveal ───────────────────────────── */}
<motion.div
  style={{
    opacity: useTransform(scrollYProgress, [0.72, 0.9], [0, 1]),
    y: useTransform(scrollYProgress, [0.72, 0.9], [60, 0]),
    scale: useTransform(scrollYProgress, [0.72, 0.9], [0.96, 1]),
  }}
  className="absolute inset-0 z-30 flex items-center justify-center px-6"
>
  {/* Ambient vignette */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70" />

  <div className="relative max-w-5xl text-center">
    {/* Premium Label */}
    <div className="flex items-center justify-center gap-5 mb-8">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#FA8322]" />

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#FA8322] shadow-[0_0_18px_rgba(250,131,34,0.9)]" />
        <span className="uppercase tracking-[0.45em] text-[11px] font-semibold text-[#FA8322]">
          Our Philosophy
        </span>
      </div>

      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#FA8322]" />
    </div>

    {/* Manifesto */}
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white font-semibold tracking-[-0.04em] leading-[0.95] text-5xl md:text-4xl lg:text-5xl"
    >
      <span className="block">The right university.</span>

      <span className="block text-white/90 mt-3">
        The right major.
      </span>

      <span className="block bg-gradient-to-r from-[#FA8322] via-[#F45104] to-[#D51E20] bg-clip-text text-transparent mt-3">
        The right future.
      </span>
    </motion.h2>

    {/* Divider */}
    <div className="mx-auto mt-12 mb-10 h-px w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

    {/* Description */}
    <p className="mx-auto max-w-3xl text-lg md:text-xl leading-9 text-white/75 font-light">
      ORVA is a boutique university admissions consultancy for families in the
      UAE and Saudi Arabia. We partner with ambitious students from
      <span className="text-white font-medium"> Year 9 onwards</span>,
      crafting a deliberate pathway to
      <span className="text-white font-medium">
        {" "}
        Oxford, Cambridge, the Ivy League
      </span>
      , Europe's leading universities and ultimately a career built with
      confidence and purpose.
    </p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mt-14 flex justify-center"
    >
      <button className="group flex items-center gap-3 uppercase tracking-[0.3em] text-xs font-semibold text-white transition-colors hover:text-[#FA8322]">
        Discover ORVA

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#FA8322] group-hover:bg-[#FA8322]/10">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-5-5l5 5-5 5"
            />
          </svg>
        </span>
      </button>
    </motion.div>
  </div>
</motion.div>
      </div>
    </div>
  );
}
