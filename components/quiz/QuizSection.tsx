import { QUIZ_QUESTIONS } from "@/lib/constants";
import { QuizProgress } from "./QuizProgress";
import { QuestionCard } from "./QuestionCard";

interface QuizSectionProps {
  currentQuestion: any;
  totalQuestions: number;
  onSelectAnswer: (index: number) => void;
}

export function QuizSection({
  currentQuestion,
  totalQuestions,
  onSelectAnswer,
}: QuizSectionProps) {
  const questionNumber = QUIZ_QUESTIONS.findIndex(
    (q) => q.id === currentQuestion.id
  ) + 1;

  return (
    <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#FAFAF7] to-[#F5F5F5]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-[#D51E20] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <QuizProgress
          currentQuestion={questionNumber}
          totalQuestions={totalQuestions}
        />
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            questionId={currentQuestion.id}
            onSelectAnswer={onSelectAnswer}
          />
        )}
      </div>
    </section>
  );
}
