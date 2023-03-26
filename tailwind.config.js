/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#374049",
        lightBlue: "#505A65",
        white: "#FFFFFF",
        beige: "#A38C64",
        lightBeige: "#C5B59D",
      },
    },
    fontFamily: {
      signature: ["Montez"],
    },
  },
  plugins: [],
};
