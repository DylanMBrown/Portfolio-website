import type { NeonColor } from "@/lib/theme";

export interface GraffitiMessage {
  id: string;
  name: string;
  tag: string;
  x: number;
  y: number;
  color: NeonColor;
  retentionDays: number;
  createdAt: Date;
  status: "pending" | "approved" | "rejected";
}

export interface GraffitiState {
  messages: GraffitiMessage[];
  addMessage: (
    message: Omit<GraffitiMessage, "id" | "status" | "createdAt">,
  ) => void;
  clearWall: () => void;
  setRetention: (days: number) => void;
}

export interface SceneState {
  activeProjectId: string | null;
  cameraPosition: { x: number; y: number; z: number };
  isThreeDSupported: boolean;
}
