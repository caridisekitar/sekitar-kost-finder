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
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
