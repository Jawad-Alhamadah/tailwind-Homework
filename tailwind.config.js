/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '850-and-up': '850px',
        '300-and-up': '300px'
      },
      colors: {
        coffeeBrown:'#c99484'
      }
    },
  },
  plugins: [],
}

