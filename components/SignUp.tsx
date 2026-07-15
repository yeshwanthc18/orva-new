"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { submitForm } from "@/lib/api";
import GradientSection from "./AnimatedGradient";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setError("");
    setLoading(true);

    const result = await submitForm({
      formType: "newsletter",
      email,
      data: { source: "footer_signup" },
    });

    setLoading(false);

    if (!result.success) {
      setError(result.error || "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setEmail("");
  };

  return (
    <GradientSection className="relative overflow-hidden py-28 lg:py-40">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none" id="signup">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-72 -left-72 w-[800px] h-[800px] rounded-full border border-white/5"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-white/80">
              ORVA Insider
            </span>

            <h2 className="mt-6 sm:mt-8 text-white font-bold leading-[1.05] tracking-tight text-[clamp(36px,6vw,84px)]">
              Stay ahead of
              <br />
              every opportunity.
            </h2>

            <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/75">
              Receive invitations to education summits, university events,
              scholarships, exclusive webinars and future-focused career
              insights before everyone else.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-10 text-white/80 text-xs sm:text-sm uppercase tracking-wider font-medium">
              <span>Events</span>
              <span>•</span>
              <span>Webinars</span>
              <span>•</span>
              <span>University Visits</span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="lg:col-span-5"
          >
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[24px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,.18)]">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    Welcome to the Insider
                  </h3>
                  <p className="mt-3 text-white/70 text-sm sm:text-base">
                    You&apos;re in. Watch your inbox for exclusive opportunities.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    Join ORVA Insider
                  </h3>

                  <p className="mt-3 text-white/70 leading-relaxed text-sm sm:text-base">
                    One email. Zero spam. Only valuable opportunities.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-14 rounded-2xl bg-white/15 border border-white/20 px-5 sm:px-6 text-white placeholder:text-white/50 outline-none focus:border-white/40 text-base"
                    />

                    {error && (
                      <p className="text-sm text-red-300 font-medium">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="secondaryLight"
                      size="lg"
                      className={`w-full rounded-2xl bg-white text-[#D51E20] hover:bg-white/90 ${
                        loading ? "opacity-60 pointer-events-none" : ""
                      }`}
                    >
                      {loading ? "Joining..." : "Join the Community"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </GradientSection>
  );
}
