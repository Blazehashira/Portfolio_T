/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      height: {
        "screen-1/2": "50vh",
      },
      spacing: {
        big: "48rem",
      },
    },
  },
  plugins: [],
};
