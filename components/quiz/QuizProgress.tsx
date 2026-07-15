import { motion } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const progressPercent = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="mb-12 space-y-4">
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: COLORS.primary }}
        >
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-xs font-semibold text-[#666666]">
          {Math.round(progressPercent)}% complete
        </span>
      </div>
      
      <div className="relative w-full h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${COLORS.primary}, #F87171)`,
          }}
        />
      </div>

      <div className="flex gap-1.5">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.6, opacity: 0.5 }}
            animate={{ 
              scaleY: i < currentQuestion ? 1 : 0.8,
              opacity: i < currentQuestion ? 1 : 0.4,
              backgroundColor: i < currentQuestion ? COLORS.primary : "#E5E5E5"
            }}
            transition={{ duration: 0.3 }}
            className="flex-1 h-1 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
