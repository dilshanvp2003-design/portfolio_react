/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "var(--bg)",
          soft: "var(--bg-soft)",
          card: "var(--bg-card)",
          border: "var(--border)",
        },
        cyan: {
          glow: "#3ee6e0",
          DEFAULT: "#22d3d1",
          dim: "#0d8f8e",
        },
        violet: {
          glow: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dim: "#5b3fa8",
        },
        ink: {
          DEFAULT: "var(--ink)",
          dim: "var(--ink-dim)",
          faint: "var(--ink-faint)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(62,230,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(62,230,224,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glowCyan: "0 0 30px rgba(62,230,224,0.25)",
        glowViolet: "0 0 30px rgba(167,139,250,0.25)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        floatSlow: "float 11s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-25px,25px) scale(0.95)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
