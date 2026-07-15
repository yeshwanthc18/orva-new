"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface EmailCaptureProps {
  onContinue: () => void;
}

export default function EmailCapture({
  onContinue,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setLoading(true);

      // Save email here if needed
      // await fetch("/api/quiz-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      onContinue();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#D51E20]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D51E20]">
            One Last Step
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Your Results Are Ready
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Enter your email address to unlock your personalised university
            recommendation and receive your results.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full rounded-xl border border-gray-300 px-5 outline-none transition focus:border-[#D51E20] focus:ring-4 focus:ring-[#D51E20]/10"
          />

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full"
          >
            {loading ? "Loading..." : "View My Results"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          We respect your privacy. Your email will only be used to send your
          quiz results and occasional ORVA updates.
        </p>
      </motion.div>
    </section>
  );
}