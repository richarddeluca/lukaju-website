import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0B10",
          card: "#131620",
          cardHover: "#181D2B",
          border: "rgba(255, 255, 255, 0.08)",
        },
        game: {
          wine: "#9E0038",
          wineHover: "#B80043",
          wineGlow: "#E11D48",
          blue: "#2563EB",
          cyan: "#38BDF8",
          pink: "#F43F5E",
          text: "#F3F4F6",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        serifTitle: ["var(--font-zen-mincho)", "serif"],
        heading: ["var(--font-[#0A0B10])", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        'wine-glow': '0 0 30px rgba(158, 0, 56, 0.45)',
        'blue-glow': '0 0 30px rgba(37, 99, 235, 0.35)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
