import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      colors: {
        apex: {
          blue: "#0A1628",
          mid: "#0F2347",
          accent: "#1E90FF",
          bright: "#38B6FF",
          steel: "#8AAEC8",
          light: "#E8F4FD",
        },
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
