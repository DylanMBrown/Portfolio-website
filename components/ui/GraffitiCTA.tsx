"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/graffiti-store";
import { GraffitiInputOverlay } from "@/components/ui/GraffitiInputOverlay";

export function GraffitiCTA() {
  const [inputPosition, setInputPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const { isThreeDSupported } = useAppStore();

  if (!isThreeDSupported) return null;

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <button
          onClick={() => setInputPosition({ x: 0, y: 0 })}
          className="px-8 py-4 bg-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-600/50 hover:bg-amber-700 transition-all hover:scale-105 border-2 border-amber-400"
        >
          Leave Your Mark on the Wall 🎨
        </button>
      </motion.div>

      {inputPosition && (
        <GraffitiInputOverlay
          position={inputPosition}
          onClose={() => setInputPosition(null)}
        />
      )}
    </>
  );
}
