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
        lightgray: '#c0e8f9', //#ccd6f6
        darkgray: '#5e5e5e',
        ivory: '#f6f7eb',
        burgundy: '#851e2e',
        amethyst: '#8367c7',
        redlight: '#96031a',//'#d81e5b', //#a10702 //#96031a //#590004 
        blood: '#870000',
        licorice: '#190a05',
        midnight: {
          100: '#006466',
          200: '#065a60',
          300: '#0b525b',
          400: '#144552'
        },
        byzantine: {
          light: '#4864d5',
          DEFAULT: '#3454d1',
          dark: '#263fa6',
          darker:'#1e3385',
          darkest: '#172664'
        }, // '#6153cc' // #6d72c3 // #4e4187
        gunmetal: '#0f1314',
        brightgreen: '#61e786',
        pink: '',
        gold: '#d6ad30', //#ae9036 //#c5a544 //#caad53
        tan: '#dbd3ad', //'#cbac88'
        fireorange: '#f3752b',
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
        play: ['Play', 'sans-serif']
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
