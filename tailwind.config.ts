import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 濃紺〜ほぼ黒のベース。先端的だが、warm な余白を残す
        ink: {
          950: "#05060f",
          900: "#070a18",
          800: "#0b1022",
          700: "#11182f",
          600: "#1a2340",
        },
        // 温かみのあるアクセント（夜明けの光）
        ember: {
          DEFAULT: "#ff8a5c",
          soft: "#ffb088",
        },
      },
      fontFamily: {
        // next/font の CSS 変数を参照
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "dawn-gradient":
          "linear-gradient(135deg, #6366f1 0%, #a855f7 45%, #ff8a5c 100%)",
        "aurora":
          "radial-gradient(60% 50% at 50% 0%, rgba(255,138,92,0.10) 0%, rgba(234,88,12,0.05) 45%, rgba(250,249,247,0) 80%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
