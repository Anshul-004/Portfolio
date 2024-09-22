/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myblack: "rgb(33, 33, 33)"
      }
    },
  },
  plugins: [],
}

