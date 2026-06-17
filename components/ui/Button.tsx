"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
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
    "relative inline-flex items-center justify-center font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 cursor-none overflow-hidden group",
    sizeClasses[size],
    className
  );

  const primaryClasses = cn(
    base,
    "bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] text-white hover:shadow-[0_8px_32px_rgba(213,30,32,0.35)] hover:-translate-y-0.5"
  );

  const secondaryClasses = cn(
    base,
    "bg-transparent border-0 text-[#D51E20] hover:-translate-y-0.5"
  );

  const content = variant === "primary" ? (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#FA8322] via-[#F45104] to-[#D51E20] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  ) : (
    <>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D51E20] via-[#F45104] to-[#FA8322] p-[1.5px]">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-white" />
      </span>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={variant === "primary" ? primaryClasses : secondaryClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={variant === "primary" ? primaryClasses : secondaryClasses}>
      {content}
    </button>
  );
}
