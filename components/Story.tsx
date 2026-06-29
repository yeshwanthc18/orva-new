"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { IS_ORVA_RIGHT_PAIN_POINTS } from "@/lib/constants";
import { Button } from "./ui/Button";
import GradientSection from "./AnimatedGradient";

const COLORS = {
  primary: "#D51E20",
  primaryDark: "#520A0B",
  deepBlack: "#0F0F0F",
  warmCream: "#FBF9F6",
  warmSand: "#F5F2ED",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

const SCENES = [
  {
    id: "01",
    tag: "The Spark",
    img: "/images/img02.jpeg",
    side: "right",
    headline: "Every journey begins with a single spark.",
    description:
      "For GCC families, that spark is the moment a young person dares to imagine something bigger — a world-class degree, a future without limits.",
    stat: null,
    isRed: true,
  },
];

function AnimatedCounter({
  value,
  label,
  inView,
  isRed,
}: {
  value: string;
  label: string;
  inView: boolean;
  isRed?: boolean;
}) {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(value) || 0;
  const hasPlus = value.includes("+");
  const isPercentage = value.includes("%");

  useEffect(() => {
    if (inView && targetNum > 0) {
      let current = 0;
      const step = Math.ceil(targetNum / 30);
      const timer = setInterval(() => {
        current += step;
        if (current >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [inView, targetNum]);

  return (
    <div
      className={`mt-6 pt-4 border-t ${isRed ? "border-white/10" : "border-black/[0.06]"}`}
    >
      <div
        className="text-4xl font-light tracking-tighter md:text-5xl"
        style={{ color: isRed ? "#FFFFFF" : COLORS.primary }}
      >
        {isPercentage ? `${count}%` : hasPlus ? `${count}+` : count}
      </div>
      <div
        className="text-[10px] font-bold tracking-[0.25em] uppercase mt-1"
        style={{ color: isRed ? "rgba(255,255,255,0.4)" : COLORS.textMuted }}
      >
        {label}
      </div>
    </div>
  );
}

function SceneRow({
  scene,
  index,
}: {
  scene: (typeof SCENES)[0];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35, once: false });

  const isRight = scene.side === "right";
  const isRed = scene.isRed === true;

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
      `polygon(${left}% 0%, ${right}% 0%, ${right}% 100%, ${left}% 100%)`,
  );

  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1.12, 1.03, 1.12],
  );

  return (
    <>
    <GradientSection>
    <div
      ref={containerRef}
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
     
    >
      {/* LEFT */}
      <div className="relative z-10 flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="max-w-xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-white/60" />
            <span className="uppercase tracking-[0.25em] text-sm font-semibold text-white/80">
              Is ORVA Right For You?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-3xl font-bold leading-[1.1] text-white mb-6"
          >
            Does any of these challenges
            <br />
            <span className="text-white/70">sound familiar?</span>
          </motion.h2>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-white/80 mb-5"
          >
            If you're feeling overwhelmed by university choices, applications,
            or the admissions process, you're not alone. That's exactly where we
            help.
          </motion.p>

          {/* Pain Points */}
          <div className="space-y-4 mb-4">
            {IS_ORVA_RIGHT_PAIN_POINTS.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-2 mt-0 p-2  transition-all duration-300"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                  <span className="text-xl text-white">→</span>
                </div>

                <p className="text-white/90 leading-7">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/75 leading-7 mb-8"
          >
            Every family receives personalised guidance from advisors
            representing the world's leading universities—helping students make
            confident, informed decisions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button href="/contact" variant="secondaryLight" size="lg">
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative min-h-[320px] lg:min-h-screen">
        <motion.div
          style={{ clipPath: clipPathStyle }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ y: imageTranslateY, scale: imageScale }}
            className="absolute -top-[10%] left-0 w-full h-[120%]"
          >
            <Image
              src={scene.img}
              alt={scene.tag}
              fill
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
    </GradientSection>
    </>
  );
}

export default function Story() {
  return (
    <div id="story" className="relative w-full">
      {SCENES.map((scene, index) => (
        <SceneRow key={scene.id} scene={scene} index={index} />
      ))}
    </div>
  );
}
