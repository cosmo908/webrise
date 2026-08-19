import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F6F3",
        surface: "#FFFFFF",
        ink: "#14171A",
        muted: "#5B6168",
        faint: "#8A8F94",
        line: "#E5E4E0",
        accent: {
          DEFAULT: "#0B8457",
          dark: "#076B45",
          light: "#28A873",
          tint: "#E7F5EF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        drawLine: "drawLine 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
      },
    },
  },
  plugins: [],
};

export default config;
