/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Frontend
    "./*.php",
    "./parts/**/*.php",

    // Gutenberg blocks e editor backend
    "./blocks/**/*.js",
    "./inc/**/*.php",
    "./editor/**/*.js",

    // Se usi Full Site Editing (FSE)
    "./patterns/**/*.php",
    "./parts/**/*.php",

    // Script globali
    "./assets/js/**/*.js",
  ],
  safelist: ["bg-red-500", "border-red-500", "text-red-500"],
  theme: {
    extend: {},
  },
  plugins: [],
};
