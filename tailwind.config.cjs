/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayBackInput": "#35353A",
        "InputLabelColor": "#7C7C84",
        "YellowMango": "#FFD222",
        "backgroudGeneral": "#161616",
        "backgroundNavbar": "#343434"
      }
    },
  },
  plugins: [],
}
