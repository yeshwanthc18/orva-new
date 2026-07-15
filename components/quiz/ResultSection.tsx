import { motion } from "framer-motion";
import { TIER_LABELS } from "@/lib/constants";
import { ResultUniversities } from "./ResultUniversities";
import { ResultCTA } from "./ResultCTA";
import GradientSection from "../AnimatedGradient";

interface QuizResult {
  destination: "UK" | "US";
  ukPercent: number;
  usPercent: number;
  subject: string;
  tier: string;
  ukUniversity: string;
  usUniversity: string;
}

interface ResultSectionProps {
  profile: QuizResult;
  ukPercent: number;
  usPercent: number;
  onResetQuiz: () => void;
}

export function ResultSection({
  profile,
  ukPercent,
  usPercent,
  onResetQuiz,
}: ResultSectionProps) {
  return (
    <>
    <GradientSection>
       <section className="relative py-20 md:py-32 overflow-hidden ">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D51E20] rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D51E20] rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Destination Recommendation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">Your University Path</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-white">{profile.destination}</span>
            </h2>
            
            {/* Progress Bars */}
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80 font-semibold">United Kingdom</span>
                  <span className="text-white font-bold">{profile.ukPercent}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${profile.ukPercent}%` }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-[#D51E20] to-[#F87171]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80 font-semibold">United States</span>
                  <span className="text-white font-bold">{profile.usPercent}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${profile.usPercent}%` }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="text-white/70 text-sm space-y-2">
              <p>
                Subject: <span className="font-semibold text-white capitalize">{profile.subject}</span>
              </p>
              <p>
                Academic Profile: <span className="font-semibold text-[#F87171]">{TIER_LABELS[profile.tier as keyof typeof TIER_LABELS]?.label}</span>
              </p>
              <p className="text-white/60 text-xs italic">
                {TIER_LABELS[profile.tier as keyof typeof TIER_LABELS]?.description}
              </p>
            </div>
          </motion.div>

          {/* Universities Recommendation */}
          <ResultUniversities result={profile} />

          {/* Reset Button */}
          <ResultCTA onResetQuiz={onResetQuiz} />
        </motion.div>
      </div>
    </section>
    </GradientSection>
    </>
 
  );
}
