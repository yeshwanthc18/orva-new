"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, QUIZ_QUESTIONS, QUIZ_PROFILES } from "@/lib/constants";
import Link from "next/link";

type ProfileKey = keyof typeof QUIZ_PROFILES;

interface QuizAnswer {
  questionId: number;
  optionId: string;
  signal: {
    uk: number;
    us: number;
    trait?: string;
    tier?: number;
  };
}

interface QuizResult {
  profile: ProfileKey;
  ukPercent: number;
  usPercent: number;
  recommendedDestination: "UK" | "US";
  traitName: string;
  tier: number;
}

export default function QuizPage() {
  useLenis();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectAnswer = (optionId: string) => {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const selectedOption = question.options.find((opt) => opt.id === optionId);

    if (!selectedOption) return;

    const newAnswer: QuizAnswer = {
      questionId: question.id,
      optionId,
      signal: selectedOption.signal,
    };

    setAnswers([...answers, newAnswer]);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const quizResult = calculateResult([...answers, newAnswer]);
      setResult(quizResult);
      setShowResult(true);
    }
  };

  const calculateResult = (allAnswers: QuizAnswer[]): QuizResult => {
    let ukPoints = 0;
    let usPoints = 0;
    let traitCounts: Record<string, number> = {};
    let tier = 2;

    for (const answer of allAnswers) {
      ukPoints += answer.signal.uk;
      usPoints += answer.signal.us;

      if (answer.signal.trait) {
        traitCounts[answer.signal.trait] = (traitCounts[answer.signal.trait] || 0) + 1;
      }

      if (answer.signal.tier) {
        tier = answer.signal.tier;
      }
    }

    // Determine dominant trait
    const sortedTraits = Object.entries(traitCounts).sort((a, b) => b[1] - a[1]);
    const dominantTrait = sortedTraits[0]?.[0] || "";

    // Map trait to profile
    const traitToProfile: Record<string, ProfileKey> = {
      intellectual: "investigator",
      creative: "builder",
      social: "leader",
      reflective: "thinker",
      entrepreneurial: "explorer",
    };

    let profileKey: ProfileKey = traitToProfile[dominantTrait] || "solver";
    let traitName = dominantTrait || "balanced";

    // Calculate percentages
    const total = ukPoints + usPoints;
    const ukPercent = total > 0 ? Math.round((ukPoints / total) * 100) : 50;
    const usPercent = 100 - ukPercent;

    const recommendedDestination = ukPoints >= usPoints ? "UK" : "US";

    return {
      profile: profileKey,
      ukPercent,
      usPercent,
      recommendedDestination,
      traitName,
      tier,
    };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const renderHeroSection = () => (
    <section
      className="relative py-20 md:py-32 px-6 md:px-12"
      style={{ background: COLORS.warmCream }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span
              className="text-[11px] font-bold tracking-[0.35em] uppercase"
              style={{ color: COLORS.primary }}
            >
              Find Your Fit
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" style={{ color: COLORS.textDark }}>
            What kind of mind does your child have?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: COLORS.textLight }}>
            Six questions. Three universities worth exploring. Takes two minutes. Tells you more than a ranking ever could.
          </p>
        </motion.div>
      </div>
    </section>
  );

  const renderQuizSection = () => {
    if (showResult || !QUIZ_QUESTIONS[currentQuestion]) {
      return null;
    }

    const question = QUIZ_QUESTIONS[currentQuestion];

    return (
      <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.primary }}>
                Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-2">
                {Array.from({ length: QUIZ_QUESTIONS.length }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i <= currentQuestion ? "24px" : "8px",
                      background:
                        i < currentQuestion
                          ? COLORS.primary
                          : i === currentQuestion
                            ? COLORS.primary
                            : "#e0e0e0",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`question-${question.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, idx) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => handleSelectAnswer(option.id)}
                    className="w-full text-left p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg"
                    style={{
                      borderColor: COLORS.primary,
                      backgroundColor: COLORS.warmCream,
                      color: COLORS.textDark,
                    }}
                    whileHover={{
                      backgroundColor: "#fff5f0",
                      borderColor: COLORS.primary,
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-1 text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: COLORS.primary,
                          color: "white",
                        }}
                      >
                        {option.id}
                      </div>
                      <p className="text-lg leading-relaxed font-medium">{option.text}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  const renderResultSection = () => {
    if (!showResult || !result) {
      return null;
    }

    const profileData = QUIZ_PROFILES[result.profile];

    return (
      <section
        className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key="result-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Profile Name & Description */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full mb-6"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span className="text-white text-sm font-bold tracking-widest uppercase">
                    Your Profile
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {profileData.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
                >
                  {profileData.description}
                </motion.p>
              </div>

              {/* UK vs US Fit */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-6 py-8"
              >
                <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md">
                  <div className="text-4xl font-bold text-white mb-2">{result.ukPercent}%</div>
                  <div className="text-white/70 font-medium">UK Fit</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md">
                  <div className="text-4xl font-bold text-white mb-2">{result.usPercent}%</div>
                  <div className="text-white/70 font-medium">US Fit</div>
                </div>
              </motion.div>

              {/* Recommended Universities */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Recommended Universities</h3>
                <div className="space-y-4">
                  {profileData.universities.map((uni, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                      className="p-6 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="text-2xl font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{uni.name}</h4>
                          <p className="text-white/70">{uni.reason}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Daniela's Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="py-8 px-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <p className="text-lg text-white/90 italic leading-relaxed mb-4">
                  "{profileData.quote}"
                </p>
                <p className="text-white/70 font-medium">— Daniela, Founder & Strategist</p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full transition-all duration-200 hover:shadow-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  Talk to Daniela about your child's profile
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Closing Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center pt-8 border-t border-white/20"
              >
                <p className="text-white/70 italic text-lg">
                  "These are starting points, not answers. The right university for your child is a conversation."
                </p>
              </motion.div>

              {/* Reset Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-center"
              >
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white/70 font-bold text-sm tracking-wide uppercase rounded-full hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/40"
                >
                  Take Quiz Again
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7m0 0A48.678 48.678 0 0012 3c-4.8 0-9.186.822-13.047 2.318m0 0c-1.88.945-3.51 2.315-4.835 3.976M4.6 6.364A9.865 9.865 0 0112 3c4.8 0 9.186.822 13.047 2.318m0 0c1.88.945 3.51 2.315 4.835 3.976" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16" ref={containerRef}>
        {renderHeroSection()}
        {!showResult && renderQuizSection()}
        {renderResultSection()}
      </main>
      <Footer />
    </>
  );
}
