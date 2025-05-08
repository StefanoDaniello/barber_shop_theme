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
  // essa include sempre queste classi anche se non presenti nei file
  // utile per un debaug del codice lato editor  di wp
  safelist: [
    "bg-red-500",
    "border-red-500",
    "text-red-500",
    "w-full",
    "h-full",
    "flex",
    "justify-center",
    "align-center",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
