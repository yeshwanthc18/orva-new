"use client";

import { ReactNode } from "react";

interface GradientSectionProps {
  children: ReactNode;
  className?: string;
}

export default function GradientSection({
  children,
  className = "",
}: GradientSectionProps) {
  return (
    <section className={`gradient-section ${className}`}>
      {children}
    </section>
  );
}