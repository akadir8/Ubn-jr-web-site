/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounce: "bounce 2s infinite"
      }
    },
    fontFamily: {
      font:["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}

