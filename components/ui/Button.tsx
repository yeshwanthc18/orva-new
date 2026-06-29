"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "secondaryLight";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[0.12em] transition-all duration-300 overflow-hidden group cursor-none",
    sizeClasses[size],
    className
  );

  const classes =
    variant === "primary"
      ? cn(
          base,
          "bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(213,30,32,0.35)]"
        )
      : variant === "secondary"
      ? cn(
          base,
          "bg-transparent border border-[#F45104] text-[#F45104] hover:bg-[#F45104] hover:text-white hover:border-[#F45104] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(244,81,4,0.25)]"
        )
      : cn(
          base,
          "bg-transparent border border-white/80 text-white hover:bg-white hover:text-[#D51E20] hover:border-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
        );

  const content =
    variant === "primary" ? (
      <>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        <span className="absolute inset-0 bg-gradient-to-r from-[#FA8322] via-[#F45104] to-[#D51E20] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </>
    ) : (
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}