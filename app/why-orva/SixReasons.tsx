"use client";
import { COLORS, WHY_ORVA_POINTS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { StackingSection } from "@/app/why-orva/StackingSection";

export default function SixReasons() {
  return (
    // NOTE: no `overflow-hidden` here — it breaks `position: sticky` on any
    // descendant (StackingSection relies on sticky to pin the card stage
    // while the user scrolls through the tall spacer track). Clipping is
    // now scoped to the decorative glow layer below instead.
    <section className="relative" style={{ background: COLORS.warmCream }}>
      {/* Decorative layer — its own stacking context, clipped on its own,
          and explicitly kept out of the document flow so it can't affect
          the height/scroll math of the sticky section beneath it. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern variant="light" />
        <div
          className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full blur-[120px] opacity-60"
          style={{ background: "radial-gradient(circle,#D51E2010 0%,transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="px-6 lg:px-10 mt-24">
          <div className="h-px bg-black/10" />
        </div>

        <div className="mt-14">
          <StackingSection cards={WHY_ORVA_POINTS} />
        </div>
      </div>
    </section>
  );
}