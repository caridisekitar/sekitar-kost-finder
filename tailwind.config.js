module.exports = {
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
