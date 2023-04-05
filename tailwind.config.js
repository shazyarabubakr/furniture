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
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
    fontFamily: {
      signature: ["Montez"],
    },
  },
  plugins: [require("daisyui")],
};
