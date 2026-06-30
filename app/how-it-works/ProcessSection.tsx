"use client";

import { COLORS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import HorizontalProcessScroll from "./HorizontalProcessScroll";

export default function ProcessSection() {
  return (
    <section className="relative" style={{ background: COLORS.warmCream }}>
      <GridPattern variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28"></div>
      <HorizontalProcessScroll />
    </section>
  );
}
