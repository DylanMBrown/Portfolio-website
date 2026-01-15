export const ABORIGINAL_PALETTE = {
  ochre: "#D4A017",
  terracotta: "#CC5500",
  sienna: "#A0522D",
  charcoal: "#2D2D2D",
  cream: "#F5F5DC",
  bloodRed: "#8B0000",
  black: "#1A1A1A",
  white: "#FFFFFF",
  desertSunset: "#E9B44C",
  nightCountry: "#2D2D2D",
  earthDream: "#A0522D",

  glassLight: "rgba(245, 245, 220, 0.15)",
  glassDark: "rgba(26, 26, 26, 0.25)",
  glassBorder: "rgba(212, 165, 23, 0.3)",
} as const;

export const ABORIGINAL_GRADIENTS = {
  primary: "linear-gradient(135deg, #D4A017 0%, #CC5500 100%)",
  secondary: "linear-gradient(135deg, #A0522D 0%, #D4A017 100%)",
  dark: "linear-gradient(180deg, #2D2D2D 0%, #1A1A1A 100%)",
  sunset: "linear-gradient(135deg, #E9B44C 0%, #CC5500 100%)",
  night: "linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)",
  earth: "linear-gradient(135deg, #A0522D 0%, #D4A017 100%)",
} as const;

export type AboriginalColor = keyof typeof ABORIGINAL_PALETTE;
export type AboriginalGradient = keyof typeof ABORIGINAL_GRADIENTS;
