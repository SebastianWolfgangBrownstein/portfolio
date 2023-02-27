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
        grayblue: '#0e1b33',
        lightgray: '#ccd6f6',
        ivory: '#f6f7eb',
        burgundy: '#851e2e',
        amethyst: '#8367c7',
        midnight: {
          100: '#006466',
          200: '#065a60',
          300: '#0b525b',
          400: '#144552'
        },
        overlay: {
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
        },
        mint: '#affcaf', //#bfd7b5
        nextjs: '#ffffff',
        typescript: '#007acc',
        python: '#ffd141',
        flask: '#0d7963',
        sass: '#cd6799',
        mysql: '#e48e00',
        jest: '#c63d14',
        ffmpeg: '#388e3c'
      },
      fontFamily: {
        genos: ['Genos', 'sans-serif'],
        secular: ['Secular One', 'sans-serif'],
      },
      spacing: {
        100: "30rem",
        150: "35rem",
        200: "40rem",
        300: "45rem",
        350: "50rem"
      }
    },
  },
  plugins: [],
}
