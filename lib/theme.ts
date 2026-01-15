export const NEON_PALETTE = {
    cyan: "#00f3ff",
    purple: "#bc13fe",
    green: "#ccff00",
    pink: "#ff0099",
    dark: "#050a14",
    light: "#e0f2fe",

    glassLight: "rgba(224, 242, 254, 0.1)",
    glassDark: "rgba(5, 10, 20, 0.6)",
    glassBorder: "rgba(0, 243, 255, 0.3)",
} as const;

export const NEON_GRADIENTS = {
    primary: "linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)",
    secondary: "linear-gradient(135deg, #ccff00 0%, #00f3ff 100%)",
    dark: "linear-gradient(180deg, #050a14 0%, #000000 100%)",
    sunset: "linear-gradient(135deg, #ff0099 0%, #bc13fe 100%)",
} as const;

export const ABORIGINAL_GRADIENTS = {
    primary: "linear-gradient(135deg, #c58c2c 0%, #a63c3c 100%)", // Ochre to Earth Red
    secondary: "linear-gradient(135deg, #ccff00 0%, #c58c2c 100%)", // Neon Green to Ochre
} as const;

export type NeonColor = keyof typeof NEON_PALETTE;
export type NeonGradient = keyof typeof NEON_GRADIENTS;
