"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const COLORS = {
  primary: "#D51E20",
  primaryDark: "#520A0B",
  warmCream: "#FBF9F6",
  warmSand: "#F5F2ED",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
}

interface PricingTiersProps {
  tiers: PricingTier[];
}

export default function PricingTiers({ tiers }: PricingTiersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmSand }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
              Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
            Choose Your Package
          </h2>
          <p className="text-lg" style={{ color: COLORS.textLight }}>
            Flexible options designed to meet your needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`rounded-lg p-8 transition-all ${
                tier.highlight
                  ? "border-2 relative md:scale-105"
                  : "border border-black/[0.06] hover:border-black/[0.12]"
              }`}
              style={{
                background: tier.highlight ? COLORS.primary : "white",
                borderColor: tier.highlight ? COLORS.primary : undefined,
              }}
            >
              {tier.highlight && (
                <div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold tracking-[0.1em] uppercase text-white"
                  style={{ background: COLORS.primaryDark }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: tier.highlight ? "white" : COLORS.textDark }}
              >
                {tier.name}
              </h3>

              <div
                className="text-sm mb-4"
                style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : COLORS.textLight }}
              >
                {tier.description}
              </div>

              <div
                className="text-3xl font-bold mb-6"
                style={{ color: tier.highlight ? "white" : COLORS.primary }}
              >
                {tier.price}
              </div>

              <button
                className="w-full py-3 rounded-lg font-semibold mb-8 transition-all"
                style={{
                  background: tier.highlight ? "white" : COLORS.primary,
                  color: tier.highlight ? COLORS.primary : "white",
                }}
              >
                Get Started
              </button>

              <div className="space-y-3">
                {tier.features.map((feature, fidx) => (
                  <div key={fidx} className="flex gap-3 text-sm" style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : COLORS.textMuted }}>
                    <span style={{ color: tier.highlight ? "white" : COLORS.primary }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
