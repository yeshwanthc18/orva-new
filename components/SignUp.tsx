"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import GradientSection from "./AnimatedGradient";

export default function SignupSection() {
  return (
    <GradientSection className="relative overflow-hidden py-28 lg:py-40">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none"  id="signup">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-72 -left-72 w-[800px] h-[800px] rounded-full border border-white/5"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%)]" />
    </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 text-xs tracking-[0.25em] uppercase font-semibold text-white/80">
              ORVA Insider
            </span>

            <h2 className="mt-8 text-white font-bold leading-[1.05] tracking-tight text-[clamp(48px,7vw,84px)]">
              Stay ahead of
              <br />
              every opportunity.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/75">
              Receive invitations to education summits, university events,
              scholarships, exclusive webinars and future-focused career
              insights before everyone else.
            </p>

            <div className="flex flex-wrap gap-6 mt-10 text-white/80 text-sm uppercase tracking-wider font-medium">
              {/* <span>Scholarships</span>
              <span>•</span> */}
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
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[36px] p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,.18)]">

              <h3 className="text-white text-2xl font-semibold">
                Join ORVA Insider
              </h3>

              <p className="mt-3 text-white/70 leading-relaxed">
                One email. Zero spam. Only valuable opportunities.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-16 rounded-2xl bg-white/15 border border-white/20 px-6 text-white placeholder:text-white/50 outline-none focus:border-white/40"
                />

                <Button
                  type="submit"
                  variant="secondaryLight"
                  size="lg"
                  className="w-full rounded-2xl bg-white text-[#D51E20] hover:bg-white/90"
                >
                  Join the Community
                </Button>
              </form>

             
            </div>
          </motion.div>
        </div>
      </div>
    </GradientSection>
  );
}