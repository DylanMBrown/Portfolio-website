"use client";

import { motion } from "framer-motion";
import { NEON_GRADIENTS, ABORIGINAL_GRADIENTS } from "@/lib/theme";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "aboriginal";
}

export function GradientText({
  children,
  className = "",
  variant = "primary",
}: GradientTextProps) {
  const gradient =
    variant === "aboriginal"
      ? ABORIGINAL_GRADIENTS.primary
      : variant === "secondary"
        ? NEON_GRADIENTS.secondary
        : NEON_GRADIENTS.primary;

  return (
    <h2
      className={`text-4xl font-bold ${className}`}
      style={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </h2>
  );
}
