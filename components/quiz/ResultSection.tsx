"use client";

import { motion } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TIER_LABELS } from "@/lib/constants";
import type { QuizResult } from "@/hooks/useQuizLogic";

interface ResultSectionProps {
  profile: QuizResult;
  onResetQuiz: () => void;
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

export function ResultSection({ profile, onResetQuiz }: ResultSectionProps) {
  const tierInfo = TIER_LABELS[profile.tier as keyof typeof TIER_LABELS];
  const dominantPercent = Math.max(profile.ukPercent, profile.usPercent);
  const recommendedUniversity =
    profile.destination === "UK"
      ? profile.ukUniversity
      : profile.usUniversity;

  return (
    <section className="relative overflow-hidden bg-[#FBF9F6]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F75105]/8 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-[#AA1A12]/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D51E20]/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D51E20] sm:text-xs">
            <Sparkles size={14} />
            Your Results
          </span>
          <h1 className="mt-6 text-[clamp(48px,9vw,80px)] font-extrabold leading-[1.05] tracking-tight text-[#1C1C1C]">
            You&apos;re a{" "}
            <span
              className="bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] bg-clip-text text-transparent"
            >
              {profile.destination}
            </span>{" "}
            student
          </h1>
          <p className="mt-4 text-base text-[rgba(28,28,28,0.5)] sm:text-lg">
            {dominantPercent}% match — here&apos;s your personalized breakdown
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 sm:mt-12 rounded-3xl bg-white border border-black/[0.06] p-5 shadow-[0_4px_52px_rgba(0,0,0,0.05)] sm:p-8 md:p-10"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(28,28,28,0.4)]">
            Destination Match
          </h2>

          <div className="mt-6 space-y-6">
            <ScoreRow
              label="United Kingdom"
              percent={profile.ukPercent}
              gradient="linear-gradient(to right, #D51E20, #F87171)"
              isWinner={profile.destination === "UK"}
              delay={0.3}
            />
            <ScoreRow
              label="United States"
              percent={profile.usPercent}
              gradient="linear-gradient(to right, #3B82F6, #60A5FA)"
              isWinner={profile.destination === "US"}
              delay={0.4}
            />
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl bg-white border border-black/[0.06] p-5 sm:p-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(28,28,28,0.4)]">
              Field of Interest
            </p>
            <p className="mt-2 text-lg font-bold text-[#1C1C1C]">
              {SUBJECT_LABELS[profile.subject] || profile.subject}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58 }}
            className="rounded-2xl bg-white border border-black/[0.06] p-5 sm:p-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(28,28,28,0.4)]">
              Academic Profile
            </p>
            <p className="mt-2 text-lg font-bold text-[#1C1C1C]">
              {tierInfo?.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[rgba(28,28,28,0.5)]">
              {tierInfo?.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 rounded-3xl bg-gradient-to-br from-[#F75105] to-[#AA1A12] p-6 sm:p-8 md:p-10 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Your Best-Fit University
          </p>
          <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {recommendedUniversity}
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-white/70 sm:text-base">
            Based on your {profile.destination} preference, academic profile,
            and field of interest, this is your strongest match.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
        >
          <UniversityCard
            name={profile.ukUniversity}
            country="United Kingdom"
            isBestFit={profile.destination === "UK"}
          />
          <UniversityCard
            name={profile.usUniversity}
            country="United States"
            isBestFit={profile.destination === "US"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-8 rounded-2xl bg-[#F5F2ED] p-5 sm:p-6 md:p-8"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#AA1A12]">
            Personalized Assessment
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[rgba(28,28,28,0.75)] sm:text-base">
            {profile.destination === "UK"
              ? "Your answers indicate a preference for focused, structured learning — specialising early in a field with strong career outcomes. The UK system (3-year degrees, early specialisation) aligns with your priorities for efficiency and depth. Your recommended universities reflect institutions known for academic rigor and direct entry into your chosen field."
              : "Your answers indicate a preference for breadth and flexibility — exploring subjects before committing to a major. The US system (4-year degrees, liberal arts foundation) aligns with your priorities for exploration and growth. Your recommended universities reflect institutions known for innovation, interdisciplinary study, and career flexibility."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="mt-10 flex flex-col items-center gap-4 sm:gap-5"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-10"
          >
            Book Your Free Consultation
          </Button>

          <button
            onClick={onResetQuiz}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[rgba(28,28,28,0.5)] transition hover:border-[#D51E20]/30 hover:text-[#D51E20] sm:text-sm"
          >
            <RotateCcw size={14} />
            Retake Quiz
          </button>

          <p className="mt-4 max-w-xl text-center text-sm italic leading-relaxed text-[rgba(28,28,28,0.4)]">
            These recommendations are starting points for your conversation.
            Every student is unique, and the right university choice depends on
            far more than just test scores.
          </p>
          <p className="text-xs font-medium text-[rgba(28,28,28,0.3)]">
            — Orva Advisors
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ScoreRow({
  label,
  percent,
  gradient,
  isWinner,
  delay,
}: {
  label: string;
  percent: number;
  gradient: string;
  isWinner: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#1C1C1C] sm:text-base">
            {label}
          </span>
          {isWinner && (
            <span className="rounded-full bg-[#D51E20] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Best Fit
            </span>
          )}
        </div>
        <span className="text-lg font-extrabold text-[#1C1C1C] sm:text-xl">
          {percent}%
        </span>
      </div>
      <div className="mt-2.5 h-3 w-full overflow-hidden rounded-full bg-black/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ delay, duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: gradient }}
        />
      </div>
    </div>
  );
}

function UniversityCard({
  name,
  country,
  isBestFit,
}: {
  name: string;
  country: string;
  isBestFit: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
        isBestFit
          ? "border-[#D51E20]/30 bg-[#D51E20]/5"
          : "border-black/[0.06] bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(28,28,28,0.4)]">
            {country}
          </p>
          <h4 className="mt-2 text-lg font-bold text-[#1C1C1C] sm:text-xl">
            {name}
          </h4>
        </div>
        {isBestFit && (
          <span className="flex-shrink-0 rounded-full bg-[#D51E20] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Best Fit
          </span>
        )}
      </div>
    </div>
  );
}
