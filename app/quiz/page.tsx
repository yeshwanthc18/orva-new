"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, QUIZ_QUESTIONS, QUIZ_PROFILES } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/Button";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";

type ProfileKey = keyof typeof QUIZ_PROFILES;

interface QuizAnswer {
  questionId: number;
  optionId: string;
  signal: { uk: number; us: number; trait?: string; tier?: number };
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

  const handleSelectAnswer = (optionId: string) => {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const selectedOption = question.options.find((opt) => opt.id === optionId);
    if (!selectedOption) return;

    const newAnswer: QuizAnswer = { questionId: question.id, optionId, signal: selectedOption.signal };
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
    let ukPoints = 0, usPoints = 0;
    let traitCounts: Record<string, number> = {};
    let tier = 2;

    for (const answer of allAnswers) {
      ukPoints += answer.signal.uk;
      usPoints += answer.signal.us;
      if (answer.signal.trait) traitCounts[answer.signal.trait] = (traitCounts[answer.signal.trait] || 0) + 1;
      if (answer.signal.tier) tier = answer.signal.tier;
    }

    const sortedTraits = Object.entries(traitCounts).sort((a, b) => b[1] - a[1]);
    const dominantTrait = sortedTraits[0]?.[0] || "";
    const traitToProfile: Record<string, ProfileKey> = {
      intellectual: "investigator", creative: "builder", social: "leader",
      reflective: "thinker", entrepreneurial: "explorer",
    };

    const profileKey: ProfileKey = traitToProfile[dominantTrait] || "solver";
    const total = ukPoints + usPoints;
    const ukPercent = total > 0 ? Math.round((ukPoints / total) * 100) : 50;

    return {
      profile: profileKey,
      ukPercent,
      usPercent: 100 - ukPercent,
      recommendedDestination: ukPoints >= usPoints ? "UK" : "US",
      traitName: dominantTrait || "balanced",
      tier,
    };
  };

  const resetQuiz = () => { setCurrentQuestion(0); setAnswers([]); setShowResult(false); setResult(null); };

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero with image */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img15.jpeg" alt="University match quiz" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/95 to-[#FBF9F6]/80" />
          </div>
          <Spotlight fill="#D51E20" className="absolute inset-0" />
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="label mb-6">Find Your Fit</span>
              <TextGenerateEffect
                words="What kind of mind does your child have?"
                className="text-[clamp(36px,6vw,56px)] leading-[1.1] tracking-tight mb-6"
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
                Six questions. Three universities worth exploring. Takes two minutes.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Quiz */}
        {!showResult && (
          <section className="relative py-16 md:py-24 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
            <GridPattern variant="light" />
            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Progress */}
              <div className="flex items-center justify-between mb-10">
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
                        background: i <= currentQuestion ? COLORS.primary : "#e0e0e0",
                      }}
                    />
                  ))}
                </div>
              </div>

              {QUIZ_QUESTIONS[currentQuestion] && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`q-${QUIZ_QUESTIONS[currentQuestion].id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight" style={{ color: COLORS.textDark }}>
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
                          className="w-full text-left p-5 rounded-2xl border border-black/[0.06] bg-white hover:border-red-300/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="mt-0.5 text-sm font-bold rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                              style={{ backgroundColor: COLORS.primary, color: "white" }}
                            >
                              {option.id}
                            </div>
                            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: COLORS.textDark }}>{option.text}</p>
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

        {/* Result */}
        {showResult && result && (
          <section className="relative py-20 md:py-32 overflow-hidden noise-bg">
            <div className="absolute inset-0">
              <Image src="/images/img11.jpeg" alt="" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#520A0B]/95 via-[#0F0F0F]/90 to-[#0F0F0F]" />
            </div>
            <FloatingGeometry variant="dark" density="normal" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-10">
                {/* Profile */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-block px-6 py-2 rounded-full mb-6 bg-white/10 border border-white/20 backdrop-blur-md"
                  >
                    <span className="text-white text-sm font-bold tracking-widest uppercase">Your Profile</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{QUIZ_PROFILES[result.profile].name}</h2>
                  <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">{QUIZ_PROFILES[result.profile].description}</p>
                </div>

                {/* UK vs US */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-white mb-2">{result.ukPercent}%</div>
                    <div className="text-white/70 font-medium">UK Fit</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl font-bold text-white mb-2">{result.usPercent}%</div>
                    <div className="text-white/70 font-medium">US Fit</div>
                  </div>
                </div>

                {/* Universities */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Recommended Universities</h3>
                  <div className="space-y-4">
                    {QUIZ_PROFILES[result.profile].universities.map((uni, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        className="p-5 rounded-2xl bg-white/10 border border-white/[0.06] backdrop-blur-md hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 bg-white/20 text-white">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{uni.name}</h4>
                            <p className="text-white/70 text-sm">{uni.reason}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="py-6 px-6 rounded-2xl border-l-4 bg-white/[0.06] border-white/30">
                  <p className="text-lg text-white/90 italic leading-relaxed mb-3">
                    &ldquo;{QUIZ_PROFILES[result.profile].quote}&rdquo;
                  </p>
                  <p className="text-white/70 font-medium">— Daniela, Founder & Strategist</p>
                </div>

                {/* CTA */}
                <div className="text-center space-y-6">
                  <Button href="/contact" variant="primary" size="lg">Talk to Daniela about your child&apos;s profile</Button>
                  <div>
                    <button
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-2 px-6 py-3 text-white/70 font-bold text-sm tracking-wide uppercase rounded-full hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/40"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                  <p className="text-white/50 italic text-base">
                    &ldquo;These are starting points, not answers. The right university for your child is a conversation.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
