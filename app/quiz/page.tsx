"use client";

import { useQuizLogic } from "@/hooks/useQuizLogic";
import { QuizHero } from "@/components/quiz/QuizHero";
import { QuizSection } from "@/components/quiz/QuizSection";
import { ResultSection } from "@/components/quiz/ResultSection";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import EventPreheader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/quiz/EmailCapture";

export default function QuizPage() {

   useLenis();
    const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const {
    currentQuestion,
    showResult,
    result,
    handleSelectAnswer,
    resetQuiz,
    totalQuestions,
  } = useQuizLogic();

  return (
    <>
       <Cursor />
          <Trail />
          <EventPreheader onClose={setIsPreheaderOpen} />
          <Navbar isPreheaderOpen={isPreheaderOpen} />
              <main>
      <QuizHero />

      {!showResult && (
        <QuizSection
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onSelectAnswer={handleSelectAnswer}
        />
      )}

     {showResult &&
  result &&
  (!emailSubmitted ? (
    <EmailCapture
      onContinue={() => setEmailSubmitted(true)}
    />
  ) : (
    <ResultSection
      profile={result}
      ukPercent={result.ukPercent}
      usPercent={result.usPercent}
      onResetQuiz={resetQuiz}
    />
  ))}
    </main>
      <Footer />
    </>

  );
}
