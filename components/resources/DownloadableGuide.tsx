"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const COLORS = {
  primary: "#D51E20",
  warmCream: "#FBF9F6",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

interface Guide {
  id: number;
  title: string;
  description: string;
  downloadCount: number;
  type: string;
  icon: string;
}

interface DownloadableGuideProps {
  guide: Guide;
  index: number;
}

export default function DownloadableGuide({ guide, index }: DownloadableGuideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-6 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 hover:shadow-lg transition-all group cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 text-3xl"
          style={{ background: `${COLORS.primary}15` }}
        >
          {guide.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold tracking-[0.1em] uppercase mb-2" style={{ color: COLORS.primary }}>
            {guide.type}
          </div>

          <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-red-600 transition-colors" style={{ color: COLORS.textDark }}>
            {guide.title}
          </h3>

          <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>
            {guide.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: COLORS.textMuted }}>
              {guide.downloadCount.toLocaleString()} downloads
            </span>
            <button
              className="text-sm font-semibold px-3 py-1 rounded transition-all"
              style={{
                color: COLORS.primary,
                background: `${COLORS.primary}10`,
              }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
