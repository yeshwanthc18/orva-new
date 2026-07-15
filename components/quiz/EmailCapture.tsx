"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { submitForm } from "@/lib/api";
import type { QuizResult } from "@/hooks/useQuizLogic";

interface EmailCaptureProps {
  onContinue: () => void;
  result?: QuizResult | null;
}

export default function EmailCapture({ onContinue, result }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setError("");
    setLoading(true);

    const submitResult = await submitForm({
      formType: "quiz_lead",
      email,
      data: result
        ? {
            destination: result.destination,
            uk_percent: result.ukPercent,
            us_percent: result.usPercent,
            subject: result.subject,
            tier: result.tier,
            uk_university: result.ukUniversity,
            us_university: result.usUniversity,
          }
        : { source: "quiz" },
    });

    setLoading(false);

    if (!submitResult.success) {
      setError(submitResult.error || "Something went wrong. Please try again.");
      return;
    }

    onContinue();
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#D51E20]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D51E20] sm:text-xs">
            One Last Step
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Results Are Ready
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Enter your email address to unlock your personalised university
            recommendation and receive your results.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full rounded-xl border border-gray-300 px-5 text-base outline-none transition focus:border-[#D51E20] focus:ring-4 focus:ring-[#D51E20]/10"
          />

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full"
          >
            {loading ? "Submitting..." : "View My Results"}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm">
          We respect your privacy. Your email will only be used to send your
          quiz results and occasional ORVA updates.
        </p>
      </motion.div>
    </section>
  );
}
