/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["3.25rem", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "display-xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.045em" }],
      },
      colors: {
        ink: {
          DEFAULT: "#fafafa",
          muted: "#a3a3a3",
          subtle: "#737373",
          dim: "#525252",
        },
        surface: {
          DEFAULT: "#000000",
          raised: "#0a0a0a",
          card: "#0d0d0d",
          inset: "#141414",
          alt: "#0a0a0a",
          border: "#262626",
        },
        accent: {
          DEFAULT: "#fbbf24",
          hover: "#fcd34d",
          deep: "#f59e0b",
          soft: "rgba(251, 191, 36, 0.12)",
          glow: "rgba(251, 191, 36, 0.35)",
        },
      },
      backgroundImage: {
        "gold-grid":
          "linear-gradient(to right, rgba(251, 191, 36, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(251, 191, 36, 0.05) 1px, transparent 1px)",
        "gold-radial":
          "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(251, 191, 36, 0.08), transparent 60%)",
        "gold-spotlight":
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251, 191, 36, 0.18), transparent 65%)",
        "gold-stroke":
          "linear-gradient(135deg, rgba(251, 191, 36, 0.45), rgba(251, 191, 36, 0) 60%)",
      },
      backgroundSize: {
        grid: "44px 44px",
        "grid-lg": "72px 72px",
      },
      boxShadow: {
        soft: "0 8px 30px -10px rgba(0, 0, 0, 0.7)",
        lift:
          "0 22px 60px -18px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(251, 191, 36, 0.08)",
        glow: "0 0 50px -8px rgba(251, 191, 36, 0.45)",
        ring: "inset 0 0 0 1px rgba(251, 191, 36, 0.18)",
        innerline:
          "inset 0 1px 0 0 rgba(255, 255, 255, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.03)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
