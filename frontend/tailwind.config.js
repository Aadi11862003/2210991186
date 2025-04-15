/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          card: "rgba(30, 41, 59, 0.7)",
        },
        accent: "#38bdf8",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
