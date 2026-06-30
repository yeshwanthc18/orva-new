"use client";

import { COLORS } from "@/lib/constants";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function ScrollingTextStrip() {
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ background: COLORS.deepBlack }}
    >
      <ScrollRevealStrip direction="right">
        <span className="text-[clamp(16px,2vw,22px)] font-bold text-white/10 uppercase tracking-[0.2em]">
          Discover &bull; Plan &bull; Build &bull; Apply &bull; Succeed
          &bull; Discover &bull; Plan &bull; Build &bull; Apply &bull;
          Succeed &bull; Discover &bull; Plan &bull; Build &bull; Apply
          &bull; Succeed
        </span>
      </ScrollRevealStrip>
    </div>
  );
}
