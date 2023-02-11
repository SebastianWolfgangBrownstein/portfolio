/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        oxfordblue: '#05062D',
        ivory: '#f6f7eb',
        burgundy: '#851e2e',
        amethyst: '#8367c7'
      },
      fontFamily: {
        genos: ['Genos', 'sans-serif']
      }
    },
  },
  plugins: [],
}
