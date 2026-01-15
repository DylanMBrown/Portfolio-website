"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-amber-500 rounded-full"
      />
      <p className="text-amber-500 ml-4 text-xl">Loading portfolio...</p>
    </div>
  );
}
