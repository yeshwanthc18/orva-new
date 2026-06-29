"use client";

import { COLORS } from "@/lib/constants";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function ScrollTextStrip() {
  return (
    <div className="py-5 overflow-hidden" style={{ background: COLORS.deepBlack }}>
      <ScrollRevealStrip direction="left">
        <span className="text-[clamp(14px,1.8vw,20px)] font-bold text-white/[0.06] uppercase tracking-[0.3em]">
          Strategy &bull; Profile Building &bull; Applications &bull; Family Support &bull; Career Futures &bull; Personalised Guidance &bull; Strategy &bull; Profile Building &bull; Applications &bull; Family Support
        </span>
      </ScrollRevealStrip>
    </div>
  );
}
