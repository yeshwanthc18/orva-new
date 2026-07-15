import { useState } from "react";
import { QUIZ_QUESTIONS, UNIVERSITIES } from "@/lib/constants";

interface SelectedAnswer {
  questionId: number;
  uk: number;
  us: number;
  subject?: string;
  tier?: string;
}

interface QuizResult {
  destination: "UK" | "US";
  ukPercent: number;
  usPercent: number;
  subject: string;
  tier: string;
  ukUniversity: string;
  usUniversity: string;
}

export const useQuizLogic = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const calculateResult = (answers: SelectedAnswer[]): QuizResult => {
    // Step 1: Calculate UK vs US destination
    let ukTotal = 0;
    let usTotal = 0;
    let subject = "exploring";
    let tier = "2";

    for (const answer of answers) {
      const uk = answer.uk ?? 0;
      const us = answer.us ?? 0;
      ukTotal += uk;
      usTotal += us;
      if (answer.subject) {
        subject = answer.subject;
      }
      if (answer.tier) {
        tier = answer.tier;
      }
    }

    const total = ukTotal + usTotal;
    const ukPercent = total > 0 ? Math.round((ukTotal / total) * 100) : 50;
    const usPercent = 100 - ukPercent;

    // Destination: whichever is higher, ties default to UK
    const destination: "UK" | "US" = ukPercent >= usPercent ? "UK" : "US";

    // Step 2: Get university recommendations based on subject + tier
    const universities =
      UNIVERSITIES[subject as keyof typeof UNIVERSITIES]?.[
        tier as keyof typeof UNIVERSITIES[keyof typeof UNIVERSITIES]
      ] || { uk: "University of Oxford", us: "Stanford University" };

    return {
      destination,
      ukPercent,
      usPercent,
      subject,
      tier,
      ukUniversity: universities.uk,
      usUniversity: universities.us,
    };
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const selectedOption = question.answers[answerIndex];

    if (!selectedOption) return;

    const newAnswer: SelectedAnswer = {
      questionId: question.id,
      uk: selectedOption.uk,
      us: selectedOption.us,
      subject: (selectedOption as any).subject,
      tier: (selectedOption as any).tier,
    };

    const updatedAnswers = [...selectedAnswers, newAnswer];
    setSelectedAnswers(updatedAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizResult = calculateResult(updatedAnswers);
      setResult(quizResult);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  return {
    currentQuestion: QUIZ_QUESTIONS[currentQuestion],
    showResult,
    result,
    handleSelectAnswer,
    resetQuiz,
    totalQuestions: QUIZ_QUESTIONS.length,
    questionNumber: currentQuestion + 1,
  };
};
