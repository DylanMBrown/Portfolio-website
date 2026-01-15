"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/graffiti-store";
import type { GraffitiMessage } from "@/types/graffiti";

const STORAGE_KEY = "graffiti";

export function useGraffitiPersistence() {
  const { messages, clearWall } = useAppStore();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed: GraffitiMessage[] = JSON.parse(saved);
        const active = parsed.filter((msg) => {
          const createdAt = new Date(msg.createdAt);
          const expiresAt = new Date(
            createdAt.getTime() + msg.retentionDays * 24 * 60 * 60 * 1000,
          );
          return new Date() < expiresAt;
        });

        if (active.length < parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
        }
      } catch (error) {
        console.error("Failed to parse graffiti data:", error);
      }
    }

    const saveInterval = setInterval(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }, 1000);

    return () => clearInterval(saveInterval);
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pruneInterval = setInterval(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed: GraffitiMessage[] = JSON.parse(stored);
          const active = parsed.filter((msg) => {
            const createdAt = new Date(msg.createdAt);
            const expiresAt = new Date(
              createdAt.getTime() + msg.retentionDays * 24 * 60 * 60 * 1000,
            );
            return new Date() < expiresAt;
          });

          if (active.length !== parsed.length) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(active));
          }
        } catch (error) {
          console.error("Failed to prune graffiti data:", error);
        }
      }
    }, 60000);

    return () => clearInterval(pruneInterval);
  }, []);
}
