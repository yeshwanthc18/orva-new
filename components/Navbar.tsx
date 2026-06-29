"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  isPreheaderOpen: boolean;
}

export default function Navbar({ isPreheaderOpen }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [ready, setReady] = useState(false);
  const [useRedLogo, setUseRedLogo] = useState(!isHome);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isLightNav = isHome && !useRedLogo;

const navColor = isLightNav ? "#FFFFFF" : "rgba(56,2,2,.65)";
const underlineColor = isLightNav ? "#FFFFFF" : "#D51E20";
const buttonBorder = isLightNav ? "#FFFFFF" : "#D51E20";
const buttonText = isLightNav ? "#FFFFFF" : "#D51E20";
const buttonHoverBg = isLightNav ? "#FFFFFF" : "#D51E20";
const buttonHoverText = isLightNav ? "#D51E20" : "#FFFFFF";
const menuIconColor = isLightNav ? "#FFFFFF" : "#1C1C1C";

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
  const navbarTop = isPreheaderOpen ? 48 : 0;

  return (
  <motion.header
    ref={headerRef}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={
      isHome
        ? {
            position: "fixed",
            top: navbarTop,
            left: 0,
            right: 0,
            zIndex: 500,
            minHeight: "64px",
            backgroundColor,
            backdropFilter: backdropBlur,
            WebkitBackdropFilter: backdropBlur,
            borderBottom,
            transition: "top .3s ease",
          }
        : {
            position: "fixed",
            top: navbarTop,
            left: 0,
            right: 0,
            zIndex: 500,
            minHeight: "64px",
            ...staticNavStyles,
            transition: "top .3s ease",
          }
    }
  >
    <div className="max-w-7xl mx-auto h-16 px-6 lg:px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <a href="/" className="shrink-0">
        <motion.img
          key={logoSrc}
          src={logoSrc}
          alt="ORVA"
          className="h-7 sm:h-8 w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .25 }}
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">

        {NAV_LINKS.map(([label, href], i) => (
          <motion.a
            key={href}
            href={href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * .05 }}
            style={{ color: navColor }}
            className="group relative px-4 py-2 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:opacity-80"
          >
            {label}

            <span
              style={{ background: underlineColor }}
              className="absolute left-4 bottom-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
            />
          </motion.a>
        ))}

      </nav>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* CTA */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .15 }}
          className="hidden sm:inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.14em] font-bold transition-all duration-300"
          style={{
            color: buttonText,
            borderColor: buttonBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = buttonHoverBg;
            e.currentTarget.style.color = buttonHoverText;
            e.currentTarget.style.borderColor = buttonHoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = buttonText;
            e.currentTarget.style.borderColor = buttonBorder;
          }}
        >
          Talk to ORVA

          <svg
            className="w-3 h-3 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>

        {/* Mobile CTA */}
        <a
          href="/contact"
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300"
          style={{
            borderColor: buttonBorder,
            color: buttonText,
          }}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke={menuIconColor}
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

      </div>

    </div>

    {/* Mobile Overlay */}
    <motion.div
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        pointerEvents: isMobileMenuOpen ? "auto" : "none",
      }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
      style={{ top: `calc(${navbarTop}px + 64px)` }}
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Menu */}
    <motion.div
      animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        y: isMobileMenuOpen ? 0 : -12,
        pointerEvents: isMobileMenuOpen ? "auto" : "none",
      }}
      className="fixed left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/10 md:hidden"
      style={{ top: `calc(${navbarTop}px + 64px)` }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 space-y-2">
        {NAV_LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="block rounded-lg px-4 py-3 text-sm uppercase tracking-wider font-semibold hover:bg-red-50 hover:text-red-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          href="/contact"
          className="block mt-5 rounded-lg bg-[#D51E20] text-white text-center py-3 font-bold uppercase tracking-wider"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Talk to ORVA
        </a>
      </nav>
    </motion.div>
  </motion.header>
);
}
