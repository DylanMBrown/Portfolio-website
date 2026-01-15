import { create } from "zustand";
import type { GraffitiState, SceneState } from "@/types/graffiti";

interface AppState extends GraffitiState, SceneState {
  setActiveProjectId: (id: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: `msg-${Date.now()}`,
          createdAt: new Date(),
          status: "approved",
        },
      ],
    })),
  clearWall: () => set({ messages: [] }),
  setRetention: (days) => set({}),
  setActiveProjectId: (id) => set({ activeProjectId: id }),
  activeProjectId: null,
  cameraPosition: { x: 0, y: 0, z: 0 },
  isThreeDSupported: typeof window !== "undefined" && !!(window as any).webgl,
}));
