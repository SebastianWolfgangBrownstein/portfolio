/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blood: '#870000',
        licorice: '#190a05',
        byzantine: {
          light: '#4864d5',
          DEFAULT: '#3454d1',
          dark: '#263fa6',
          darker:'#1e3385',
          darkest: '#172664'
        }, 
        gunmetal: {
          lightest: '#607a80',
          lighter: '#2c373a',
          light: '#1a2123',
          DEFAULT: '#0f1314',
          dark: '#090b0c'
        },
        gold: {
          25: '#e1c266',
          50: '#ddbb55',
          75: '#dab444',
          DEFAULT: '#d6ad30',
          100: '#cca328',
          200: '#bb9625',
          300: '#aa8822',
          400: '#997b1e',
          500: '#886d1b'
        }, 
        tan: {
          50: '#ece8d4',
          75: '#e6e1c6',
          DEFAULT: '#dbd3ad',
          100: '#dad2aa',
          150: '#d3ca9c',
          200: '#cdc38e',
          250: '#c7bb7f',
          300: '#c1b471',
          350: '#bbac63',
          400: '#b4a455',
          450: '#aa9a4b',
          500: '#9c8d44'
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
        play: ['Play', 'sans-serif']
      },
      spacing: {
        100: "30rem",
        150: "35rem",
        200: "40rem",
        250: "42.5rem",
        300: "45rem",
        350: "50rem",
        400: "55rem",
        450: "60rem"
      }
    },
  },
  plugins: [],
}
