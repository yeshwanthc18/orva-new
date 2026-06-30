"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS, WHATS_INCLUDED } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";

export default function WhatsIncludedSection() {
  const categories = [
    {
      key: "strategy",
      label: "Strategy",
      subtitle: "Your personalised roadmap",
      img: "/images/img02.jpeg",
    },
    {
      key: "profile",
      label: "Profile",
      subtitle: "Building competitive advantage",
      img: "/images/img06.jpeg",
    },
    {
      key: "applications",
      label: "Applications",
      subtitle: "10-15 universities supported",
      img: "/images/img04.jpeg",
    },
    {
      key: "family",
      label: "Family",
      subtitle: "We support the whole family",
      img: "/images/img03.jpeg",
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmCream }}
    >
      <GridPattern variant="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label mb-4">What&apos;s Included</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: COLORS.textDark }}
          >
            One programme. One strategy.
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: COLORS.textLight }}
          >
            Everything included — not as an upgrade, but as standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Background image accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity rounded-bl-full overflow-hidden">
                <Image
                  src={category.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              {/* Corner spin animation */}
              <div className="absolute -bottom-4 -right-4 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  viewBox="0 0 50 50"
                  className="w-full h-full animate-spin-slow"
                >
                  <rect
                    x="10"
                    y="10"
                    width="30"
                    height="30"
                    fill="none"
                    stroke="rgba(213,30,32,0.15)"
                    strokeWidth="0.5"
                    transform="rotate(45 25 25)"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: COLORS.textDark }}
                >
                  {category.label}
                </h3>
                <p
                  className="text-sm font-semibold tracking-[0.1em] uppercase mb-6"
                  style={{ color: COLORS.primary }}
                >
                  {category.subtitle}
                </p>
                <ul className="space-y-3">
                  {WHATS_INCLUDED[
                    category.key as keyof typeof WHATS_INCLUDED
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ background: COLORS.primary }}
                      ></span>
                      <span
                        className="text-sm"
                        style={{ color: COLORS.textLight }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
