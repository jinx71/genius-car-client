/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF3811",

          "secondary": "#828DF8",

          "accent": "#F471B5",

          "neutral": "#1D283A",

          "base-100": "#ffffff",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
