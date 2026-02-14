import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nano: "#00A6FF",
        "nano-dim": "#0080CC",
        bg: "#0A0A0F",
        surface: "#12121A",
        "surface-light": "#1A1A25",
        "text-primary": "#F0F0F0",
        "text-secondary": "#A0A0B0",
        "text-dim": "#606070",
        border: "#1E1E2E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
