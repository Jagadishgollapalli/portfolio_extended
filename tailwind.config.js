/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "3.125rem",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "4.25rem",
          { lineHeight: "1.05", letterSpacing: "-0.035em" },
        ],
      },
      colors: {
        depth: {
          DEFAULT: "#020617",
          raised: "#0f172a",
        },
        ink: {
          DEFAULT: "#f1f5f9",
          muted: "#94a3b8",
          subtle: "#64748b",
        },
        surface: {
          DEFAULT: "#060b14",
          alt: "#0a1328",
          card: "#0c1629",
          inset: "#111f3a",
          border: "#1e3a5f",
        },
        accent: {
          DEFAULT: "#38bdf8",
          hover: "#7dd3fc",
          muted: "#0ea5e9",
          soft: "rgba(56, 189, 248, 0.14)",
        },
      },
      backgroundImage: {
        mesh:
          "radial-gradient(ellipse 120% 70% at 50% -35%, rgb(30 58 138 / 0.45), transparent 55%), radial-gradient(ellipse 90% 60% at 100% -10%, rgb(56 189 248 / 0.1), transparent 50%), radial-gradient(ellipse 70% 50% at -10% 60%, rgb(59 130 246 / 0.12), transparent 45%)",
        "fine-grid":
          "linear-gradient(to right, rgb(56 189 248 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(56 189 248 / 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "52px 52px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgb(0 0 0 / 0.55)",
        lift:
          "0 16px 48px -12px rgb(0 0 0 / 0.55), 0 0 0 1px rgb(56 189 248 / 0.07)",
        glow: "0 0 56px -8px rgb(56 189 248 / 0.3)",
        innerline:
          "inset 0 1px 0 0 rgb(255 255 255 / 0.06), inset 0 0 0 1px rgb(56 189 248 / 0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
