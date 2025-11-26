/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",     // main background
        card: "#161b22",        // card background
        textPrimary: "#c9d1d9", // main text
        textSecondary: "#8b949e",
        accent: "#58a6ff",      // blue accent
        accentSecondary: "#a371f7", // purple accent
        borderSoft: "#1f2530",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 0 20px rgba(88, 166, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
