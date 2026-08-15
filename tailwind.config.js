/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./static/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "bg-primary-light": "#ffffff",
        "bg-secondary-light": "#f8fafc",
        "bg-tertiary-light": "#f1f5f9",
        "text-primary-light": "#1f2937",
        "text-secondary-light": "#525252",
        "text-tertiary-light": "#737373",
        "border-primary-light": "#d4d4d8",
        "border-secondary-light": "#e5e7eb",
        "accent-light": "#0284c7",
        "bg-primary-dark": "#121212",
        "bg-secondary-dark": "#1a1a1a",
        "bg-tertiary-dark": "#222222",
        "text-primary-dark": "#f3f4f6",
        "text-secondary-dark": "#a3a3a3",
        "text-tertiary-dark": "#808080",
        "border-primary-dark": "#374151",
        "border-secondary-dark": "#27272a",
        "accent-dark": "#38bdf8",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
