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
        ochre: "#c58c2c", // Earthy yellow-brown
        cream: "#f5f5dc",
        "earth-red": "#a63c3c", // Red ochre
        neon: {
          cyan: "#00f3ff",
          purple: "#bc13fe",
          green: "#ccff00",
          pink: "#ff0099",
          dark: "#050a14",
          light: "#e0f2fe",
          "glass-light": "rgba(224, 242, 254, 0.1)",
          "glass-dark": "rgba(5, 10, 20, 0.6)",
          "glass-border": "rgba(0, 243, 255, 0.3)",
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
