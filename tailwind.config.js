/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkViolet: "#431865",
        SoftViolet: "#8823D7",
        SoftWhite: "#F3F4F6",
        SoftGray: "#9CA3B6",
        RedKiss: "#D45169",
        DarkMode: "#0F172A",
        DarkBlue: "#070B13",
      },
    },
    screens: {
      xs: "425px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }

      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
