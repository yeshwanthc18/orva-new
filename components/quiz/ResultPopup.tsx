"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TIER_LABELS } from "@/lib/constants";
import type { QuizResult } from "@/hooks/useQuizLogic";

interface ResultPopupProps {
  result: QuizResult | null;
  isOpen: boolean;
  onClose: () => void;
}

const SUBJECT_LABELS: Record<string, string> = {
  law: "Law, Politics & International Relations",
  business: "Business, Economics & Finance",
  engineering: "Engineering, Computer Science & Tech",
  medicine: "Medicine & Health Sciences",
  sciences: "Natural Sciences & Maths",
  arts: "Arts, Humanities & Social Sciences",
  exploring: "Still Exploring",
};

export default function ResultPopup({
  result,
  isOpen,
  onClose,
}: ResultPopupProps) {
  const tierLabel = result
    ? TIER_LABELS[result.tier as keyof typeof TIER_LABELS]
    : null;

  const dominantPercent = result
    ? Math.max(result.ukPercent, result.usPercent)
    : 0;

  const recommendedUniversity = result
    ? result.destination === "UK"
      ? result.ukUniversity
      : result.usUniversity
    : "";

  return (
    <AnimatePresence>
      {isOpen && result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FBF9F6] shadow-2xl no-scrollbar"
          >
            <button
              onClick={onClose}
              aria-label="Close results"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#1C1C1C] shadow-sm transition hover:bg-white hover:text-[#D51E20] sm:right-5 sm:top-5"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden">
              <div
                className="px-6 pt-10 pb-8 text-center sm:px-10 sm:pt-12"
                style={{
                  background:
                    "linear-gradient(180deg, #F75105 0%, #AA1A12 100%)",
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/90"
                >
                  Your Result
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="mt-5 text-5xl font-extrabold text-white sm:text-6xl"
                >
                  {result.destination}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="mt-3 text-sm font-medium text-white/70"
                >
                  {dominantPercent}% match — your best-fit destination
                </motion.p>

                <div className="mt-7 space-y-3">
                  <ScoreBar
                    label="United Kingdom"
                    percent={result.ukPercent}
                    delay={0.35}
                    color="linear-gradient(to right, #D51E20, #F87171)"
                  />
                  <ScoreBar
                    label="United States"
                    percent={result.usPercent}
                    delay={0.45}
                    color="linear-gradient(to right, #3B82F6, #60A5FA)"
                  />
                </div>
              </div>

              <div className="space-y-5 px-6 py-8 sm:px-10 sm:py-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <InfoCard
                    label="Field of Interest"
                    value={
                      SUBJECT_LABELS[result.subject] ||
                      result.subject
                    }
                  />
                  {tierLabel && (
                    <InfoCard
                      label="Academic Profile"
                      value={tierLabel.label}
                      subtext={tierLabel.description}
                    />
                  )}
                </div>

                <div className="rounded-2xl border border-[#D51E20]/15 bg-white p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D51E20]">
                    Recommended University
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#1C1C1C] sm:text-3xl">
                    {recommendedUniversity}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[rgba(28,28,28,0.6)]">
                    Based on your {result.destination} preference and academic
                    profile, this is your strongest match. Your full results
                    page includes both UK and US options.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F5F2ED] p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#AA1A12]">
                    Personalized Assessment
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(28,28,28,0.75)]">
                    {result.destination === "UK"
                      ? "Your answers point toward a focused, structured path — specialising early in a field with strong career outcomes. The UK system aligns with your preference for depth and efficiency."
                      : "Your answers point toward a broad, flexible path — exploring subjects before committing. The US system aligns with your preference for breadth, innovation, and time to grow."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Book Your Free Consultation
                  </Button>
                  <button
                    onClick={onClose}
                    className="w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[rgba(28,28,28,0.5)] transition hover:text-[#D51E20]"
                  >
                    View Full Results Below
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScoreBar({
  label,
  percent,
  delay,
  color,
}: {
  label: string;
  percent: number;
  delay: number;
  color: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-semibold text-white/80">
        <span>{label}</span>
        <span className="text-white">{percent}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15 border border-white/20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ delay, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

function InfoCard({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string;
  subtext?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.06]">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(28,28,28,0.4)]">
        {label}
      </p>
      <p className="mt-1.5 text-base font-bold text-[#1C1C1C] capitalize">
        {value}
      </p>
      {subtext && (
        <p className="mt-1 text-xs leading-relaxed text-[rgba(28,28,28,0.5)]">
          {subtext}
        </p>
      )}
    </div>
  );
}
