"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [ready, setReady] = useState(false);
  const [useRedLogo, setUseRedLogo] = useState(!isHome);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  const getHeroThresholds = () => {
    if (typeof window !== "undefined") {
      const heroHeight = window.innerHeight * 1.5;
      return [heroHeight - 150, heroHeight];
    }
    return [1000, 1150];
  };

  const thresholds = getHeroThresholds();
  const transitionEndThreshold = thresholds[1];

  useEffect(() => {
    if (!isHome) return;
    const unsubscribe = scrollY.on("change", (latestScroll) => {
      setUseRedLogo(latestScroll >= transitionEndThreshold);
    });
    return () => unsubscribe();
  }, [scrollY, transitionEndThreshold, isHome]);

  const backgroundColor = isHome
    ? useTransform(scrollY, thresholds, ["transparent", "rgba(248, 246, 242, 0.98)"])
    : undefined;

  const backdropBlur = isHome
    ? useTransform(scrollY, thresholds, ["blur(0px)", "blur(20px) saturate(180%)"])
    : undefined;

  const borderBottom = isHome
    ? useTransform(scrollY, thresholds, ["1px solid transparent", "1px solid rgba(56, 2, 2, 0.1)"])
    : undefined;

  const staticNavStyles = {
    backgroundColor: "rgba(248, 246, 242, 0.98)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(56, 2, 2, 0.1)",
  };

  const logoSrc = isHome && !useRedLogo ? "/orva-logo-white.svg" : "/orva-logo-red.svg";

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={
          isHome
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 500,
                height: "auto",
                minHeight: "64px",
                backgroundColor,
                backdropFilter: backdropBlur,
                WebkitBackdropFilter: backdropBlur,
                borderBottom,
                width: "100%",
              }
            : {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 500,
                height: "auto",
                minHeight: "64px",
                ...staticNavStyles,
                width: "100%",
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200">
            <motion.img
              src={logoSrc}
              alt="ORVA Education"
              style={{ height: 28, width: "auto" }}
              className="h-7 w-auto sm:h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={logoSrc}
            />
            <span
              className="ml-2 text-[10px] font-bold tracking-[0.2em] uppercase hidden sm:inline"
              style={{ color: useRedLogo || !isHome ? "#D51E20" : "rgba(248,246,242,0.6)" }}
            >
              Elite Admissions.
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map(([label, href], i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: -5 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                style={{ color: "rgba(56, 2, 2, 0.65)" }}
                className="relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:text-red-600 transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-1 left-3 lg:left-4 w-0 h-0.5 bg-red-600 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 border-[1.5px] border-red-600 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
            style={{ color: "#D51E20" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#D51E20";
              el.style.color = "#f8f6f2";
              el.style.boxShadow = "0 8px 24px rgba(213, 30, 32, 0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#D51E20";
              el.style.boxShadow = "none";
            }}
          >
            <span>Talk to ORVA</span>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="sm:hidden flex items-center justify-center w-10 h-10 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
            style={{ color: "#D51E20" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#D51E20"; e.currentTarget.style.color = "#f8f6f2"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#D51E20"; }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          <motion.button
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5 transition-colors duration-200 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "#1C1C1C" }} className="transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={isMobileMenuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 top-16 md:hidden bg-black/30 backdrop-blur-sm z-40"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-b border-black/10 z-40"
      >
        <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
          {NAV_LINKS.map(([label, href], i) => (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </motion.a>
          ))}
          <a
            href="/contact"
            className="block px-4 py-3 mt-4 text-sm font-bold uppercase tracking-wider text-white bg-red-600 rounded-lg text-center hover:bg-red-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Talk to ORVA
          </a>
        </nav>
      </motion.div>
    </>
  );
}
