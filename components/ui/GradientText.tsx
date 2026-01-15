"use client";

import { motion } from "framer-motion";
import { ABORIGINAL_GRADIENTS } from "@/lib/aboriginal-theme";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function GradientText({
  children,
  className = "",
  variant = "primary",
}: GradientTextProps) {
  const gradient =
    variant === "primary"
      ? ABORIGINAL_GRADIENTS.primary
      : ABORIGINAL_GRADIENTS.secondary;

  return (
    <h2 className={`text-4xl font-bold text-gradient ${className}`}>
      {children}
    </h2>
  );
}
