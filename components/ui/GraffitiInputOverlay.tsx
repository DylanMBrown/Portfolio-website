"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitGraffiti } from "@/app/actions/graffiti";
import {
  ABORIGINAL_PALETTE,
  type AboriginalColor,
} from "@/lib/aboriginal-theme";
import { useAppStore } from "@/lib/graffiti-store";

export function GraffitiInputOverlay({
  position,
  onClose,
}: {
  position: { x: number; y: number };
  onClose: () => void;
}) {
  const { addMessage } = useAppStore();
  const [formData, setFormData] = useState({
    name: "",
    tag: "",
    color: "ochre" as AboriginalColor,
    retention: 30,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const result = await submitGraffiti(new FormData() as any);
    Object.assign(formData, {
      color: formData.color,
      retention: formData.retention,
    });

    if (result && "error" in result) {
      setError(result.error || null);
      setIsSubmitting(false);
      return;
    }

    addMessage({
      name: formData.name,
      tag: formData.tag,
      x: position.x,
      y: position.y,
      color: formData.color,
      retentionDays: formData.retention,
    });

    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full border-2 border-amber-600">
          <h2 className="text-2xl font-bold text-white mb-4">
            Leave Your Mark
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-200">
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded mb-3 border border-gray-700"
          />

          <input
            type="text"
            placeholder="Your tag"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded mb-3 border border-gray-700"
          />

          <div className="mb-4">
            <label className="text-white text-sm mb-2 block">
              How long should this stay?
            </label>
            <select
              value={formData.retention}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  retention: parseInt(e.target.value),
                })
              }
              className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700"
            >
              <option value={7}>7 days</option>
              <option value={30}>30 days</option>
              <option value={90}>90 days</option>
              <option value={180}>6 months</option>
              <option value={9999}>Permanent</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-white text-sm mb-2 block">
              Choose color
            </label>
            <div className="flex gap-2 flex-wrap">
              {(Object.keys(ABORIGINAL_PALETTE) as AboriginalColor[]).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFormData({ ...formData, color: key })}
                    className="w-10 h-10 rounded border-2 transition-all hover:scale-110"
                    style={{
                      backgroundColor:
                        ABORIGINAL_PALETTE[
                          key as keyof typeof ABORIGINAL_PALETTE
                        ],
                      borderColor:
                        formData.color === key ? "white" : "transparent",
                    }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 text-white rounded border border-gray-600 hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 py-3 text-white rounded bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Spraying..." : "Spray It! 🎨"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
