"use client";

import { motion } from "framer-motion";
import { COLORS, WHY_ORVA_POINTS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { StackingSection } from "@/app/why-orva/StackingSection";

export default function WhyOrvaSection() {
  return (
    <section className="relative" style={{ background: COLORS.warmCream }}>
      <GridPattern variant="light" />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="label mx-auto mb-6">What Sets Us Apart</span>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mt-6 mb-4"
              style={{ color: COLORS.textDark }}
            >
              Six reasons families choose Orva.
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: COLORS.textLight }}>
              Scroll through each reason to discover what makes us different.
            </p>
          </motion.div>
        </div>
        <StackingSection cards={WHY_ORVA_POINTS} />
      </div>
    </section>
  );
}
