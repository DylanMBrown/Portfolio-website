"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] to-[#1A1A1A] from-[#1A1A1A] to-[#1A1A1A1A]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] from-[#1A1A1A] opacity-30"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
