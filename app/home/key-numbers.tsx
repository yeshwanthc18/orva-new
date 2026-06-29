"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { COLORS, HERO_STATS } from "@/lib/constants";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);

  const number = parseInt(value.replace(/\D/g, "")) || 0;

  const hasPlus = value.includes("+");
  const hasPercent = value.includes("%");

  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest)
  );

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) =>
      setDisplay(latest)
    );

    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionValue, number, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [motionValue, number, inView]);

  return (
    <span ref={ref}>
      {display}
      {hasPlus && "+"}
      {hasPercent && "%"}
    </span>
  );
}

export default function KeyNumbers() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{
        background: COLORS.warmCream,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="border border-black/10">

          <div className="grid lg:grid-cols-3">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="lg:col-span-1 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between"
            >

              <div>

                <span
                  className="text-xs uppercase tracking-[0.3em] font-bold"
                  style={{ color: COLORS.primary }}
                >
                  By The Numbers
                </span>

                <h2
                  className="mt-6 font-black leading-[0.95]"
                  style={{
                    color: COLORS.textDark,
                    fontSize: "clamp(2.8rem,6vw,5rem)",
                  }}
                >
                  Trusted.
                  <br />
                  Proven.
                  <br />
                  Personal.
                </h2>

                <p
                  className="mt-8 text-lg leading-8"
                  style={{
                    color: COLORS.textMuted,
                  }}
                >
                  Every statistic reflects a student,
                  a family, and a future transformed
                  through expert university guidance.
                </p>

              </div>

              <div
                className="hidden lg:block mt-16 pt-8 border-t border-black/10"
              >
                <p
                  className="text-sm uppercase tracking-[0.2em]"
                  style={{
                    color: COLORS.textMuted,
                  }}
                >
                  Real outcomes.
                  <br />
                  Measurable impact.
                </p>
              </div>

            </motion.div>

            {/* RIGHT */}

            <div className="lg:col-span-2 grid grid-cols-2">
              {HERO_STATS.map((stat, index) => {
  const isTop = index < 2;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{ backgroundColor: "rgba(213,30,32,.02)" }}
      className={`
        relative group
        p-8 md:p-10 lg:p-12
        flex flex-col justify-between
        min-h-[220px]
        transition-all duration-300
        ${isTop ? "border-b border-black/10" : ""}
        ${isLeft ? "border-r border-black/10" : ""}
      `}
    >
      {/* Index */}

      <span
        className="text-[11px] uppercase tracking-[0.3em] font-bold"
        style={{
          color: "rgba(0,0,0,.28)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="mt-auto">

        {/* Number */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="font-black leading-none tracking-tight"
          style={{
            color: COLORS.primary,
            fontSize: "clamp(3rem,6vw,5rem)",
          }}
        >
          <Counter value={stat.value} />
        </motion.div>

        {/* Label */}

        <div
          className="mt-5 uppercase tracking-[0.18em] text-sm"
          style={{
            color: COLORS.textMuted,
          }}
        >
          {stat.label}
        </div>

        {/* Line */}

        <motion.div
          initial={{ width: 36 }}
          whileHover={{ width: 80 }}
          transition={{ duration: 0.3 }}
          className="h-[2px] rounded-full mt-8"
          style={{
            background: COLORS.primary,
          }}
        />

      </div>

      {/* Corner Accent */}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-0 right-0 w-14 h-14"
      >
        <div
          className="absolute top-0 right-0 w-full h-[2px]"
          style={{ background: COLORS.primary }}
        />

        <div
          className="absolute top-0 right-0 w-[2px] h-full"
          style={{ background: COLORS.primary }}
        />
      </motion.div>
    </motion.div>
  );
})}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 text-center"
        >
          <div
            className="mx-auto mb-8 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg,transparent,#D51E20,transparent)",
            }}
          />

          <p
            className="mx-auto max-w-3xl text-lg leading-9"
            style={{
              color: COLORS.textMuted,
            }}
          >
            Every number tells the story of a student who discovered
            the right university, a family that gained confidence,
            and a future shaped through personalised guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}