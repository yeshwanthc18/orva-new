"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, QUIZ_QUESTIONS, QUIZ_PROFILES } from "@/lib/constants";
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { SpotlightHero, Spotlight } from "@/components/ui/Spotlight";
import { MovingBorderLink, MovingBorderButton } from "@/components/ui/MovingBorderButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
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

    const sortedTraits = Object.entries(traitCounts).sort((a, b) => b[1] - a[1]);
    const dominantTrait = sortedTraits[0]?.[0] || "";

    const traitToProfile: Record<string, ProfileKey> = {
      intellectual: "investigator",
      creative: "builder",
      social: "leader",
      reflective: "thinker",
      entrepreneurial: "explorer",
    };

    let profileKey: ProfileKey = traitToProfile[dominantTrait] || "solver";
    let traitName = dominantTrait || "balanced";

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

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16" ref={containerRef}>
        {/* Hero Section */}
        <SpotlightHero>
          <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
            <Spotlight className="absolute top-0 left-0 w-full h-full" fill="#D51E20" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="label mb-6">Find Your Fit</span>
                <TextGenerateEffect
                  words="What kind of mind does your child have?"
                  className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-8"
                  style={{ color: COLORS.textDark }}
                  filter
                  duration={0.5}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed max-w-2xl"
                  style={{ color: COLORS.textLight }}
                >
                  Six questions. Three universities worth exploring. Takes two minutes. Tells you more than a ranking ever could.
                </motion.p>
              </motion.div>
            </div>
          </section>
        </SpotlightHero>

        {/* Quiz Section */}
        {!showResult && (
          <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
            <div className="max-w-3xl mx-auto">
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
                          background: i < currentQuestion
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

              {QUIZ_QUESTIONS[currentQuestion] && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`question-${QUIZ_QUESTIONS[currentQuestion].id}`}
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
                      {QUIZ_QUESTIONS[currentQuestion].question}
                    </h2>

                    <div className="space-y-4">
                      {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                        <motion.button
                          key={option.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          onClick={() => handleSelectAnswer(option.id)}
                          className="w-full text-left p-6 rounded-2xl border border-black/[0.06] bg-white transition-all duration-300 hover:border-red-300/50 hover:shadow-lg group"
                          style={{ color: COLORS.textDark }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="mt-0.5 text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
              )}
            </div>
          </section>
        )}

        {/* Result Section */}
        {showResult && result && (
          <LampEffect color="#D51E20">
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
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
                      className="inline-block px-6 py-2 rounded-full mb-6 bg-white/10 border border-white/20 backdrop-blur-md"
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
                      {QUIZ_PROFILES[result.profile].name}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
                    >
                      {QUIZ_PROFILES[result.profile].description}
                    </motion.p>
                  </div>

                  {/* UK vs US Fit — Glassmorphism */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-2 gap-6 py-8"
                  >
                    <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                      <div className="text-4xl font-bold text-white mb-2">{result.ukPercent}%</div>
                      <div className="text-white/70 font-medium">UK Fit</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                      <div className="text-4xl font-bold text-white mb-2">{result.usPercent}%</div>
                      <div className="text-white/70 font-medium">US Fit</div>
                    </div>
                  </motion.div>

                  {/* Recommended Universities — Bento Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Recommended Universities</h3>
                    <div className="space-y-4">
                      {QUIZ_PROFILES[result.profile].universities.map((uni, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                          className="p-6 rounded-2xl bg-white/10 border border-white/[0.06] backdrop-blur-md hover:bg-white/15 hover:border-red-400/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-2xl font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 bg-white/20">
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
                    className="py-8 px-6 rounded-2xl border-l-4 bg-white/[0.06] border-white/30 backdrop-blur-sm"
                  >
                    <p className="text-lg text-white/90 italic leading-relaxed mb-4">
                      &ldquo;{QUIZ_PROFILES[result.profile].quote}&rdquo;
                    </p>
                    <p className="text-white/70 font-medium">— Daniela, Founder & Strategist</p>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="text-center"
                  >
                    <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                      Talk to Daniela about your child&apos;s profile
                    </MovingBorderLink>
                  </motion.div>

                  {/* Closing Line */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center pt-8 border-t border-white/20"
                  >
                    <p className="text-white/70 italic text-lg">
                      &ldquo;These are starting points, not answers. The right university for your child is a conversation.&rdquo;
                    </p>
                  </motion.div>

                  {/* Reset */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="text-center"
                  >
                    <MovingBorderButton
                      onClick={resetQuiz}
                      containerClassName="h-10"
                      duration={6000}
                      className="bg-transparent text-white"
                    >
                      Take Quiz Again
                    </MovingBorderButton>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </LampEffect>
        )}
      </main>
      <Footer />
    </>
  );
}
