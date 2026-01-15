import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aboriginal: {
          ochre: "#D4A017",
          terracotta: "#CC5500",
          sienna: "#A0522D",
          charcoal: "#2D2D2D",
          cream: "#F5F5DC",
          "blood-red": "#8B0000",
          black: "#1A1A1A",
          white: "#FFFFFF",
          "desert-sunset": "#E9B44C",
          "night-country": "#2D2D2D",
          "earth-dream": "#A0522D",
          "glass-light": "rgba(245, 245, 220, 0.15)",
          "glass-dark": "rgba(26, 26, 26, 0.25)",
          "glass-border": "rgba(212, 165, 23, 0.3)",
        },
      },

      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "float-fast": "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
