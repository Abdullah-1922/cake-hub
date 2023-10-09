/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-vh': 'calc(100vh - 68px)',
      },
      fontFamily:{
        roboto: " 'Roboto', sans-serif"
      }
    },
  },
  daisyui:{
    themes:['light']
  },
  plugins: [require("daisyui")],
}

