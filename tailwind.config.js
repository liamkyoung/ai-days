/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['emerald'],
  },
  theme: {
    extend: {
      colors: {
        brightGreen: '#D0EFB1',
        darkGreen: '#B3D89C',
        lightBlue: '#9DC3C2',
        midBlue: '#77A6B6',
        darkBlue: '#4D7298',
      },
    },
    fontFamily: {},
  },
  plugins: [require('daisyui')],
}
