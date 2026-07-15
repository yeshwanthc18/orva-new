"use client";
import { COLORS, WHY_ORVA_POINTS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { StackingSection } from "@/app/why-orva/StackingSection";

export default function SixReasons() {
  return (
    <section className="relative" style={{ background: COLORS.warmCream }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="py-20">
          <StackingSection cards={WHY_ORVA_POINTS} />
        </div>
      </div>
    </section>
  );
}
