/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "orange-50": "#FFF6E9",
        "orange-100": "#E35205"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}
