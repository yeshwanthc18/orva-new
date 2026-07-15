import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface Answer {
  text: string;
  helper?: string;
  uk: number;
  us: number;
  subject?: string;
  tier?: string;
}

interface QuestionCardProps {
  question: string;
  answers: Answer[];
  questionId: number;
  onSelectAnswer: (index: number) => void;
}

export function QuestionCard({
  question,
  answers,
  questionId,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`q-${questionId}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 leading-snug"
          style={{ color: COLORS.textDark }}
        >
          {question}
        </h2>
        <div className="space-y-3">
          {answers.map((answer, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              onClick={() => onSelectAnswer(idx)}
              className="w-full text-left p-4 sm:p-5 md:p-6 rounded-xl border-2 border-[#E5E5E5] bg-white hover:border-[#D51E20] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                <div
                  className="mt-1 text-xs sm:text-sm font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.primary,
                    color: "white",
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <div className="flex-1 pt-1">
                  <p
                    className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold"
                    style={{ color: COLORS.textDark }}
                  >
                    {answer.text}
                  </p>
                  {answer.helper && (
                    <p
                      className="text-xs sm:text-sm mt-1 sm:mt-2"
                      style={{ color: COLORS.textLight }}
                    >
                      {answer.helper}
                    </p>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
