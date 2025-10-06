/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {},
    extend: {
      colors: {
        'cybertruckGrayText': '#C7C7C7',
        'cybertruckGrayBorder': '#C7C7C7',
        'cybertruckGrayBg': '#1A1A1A',
        'cybertruckBlackBg': '#111111',
        'cybertruckSlideBg': '#151516',
      }
    }
  },
  plugins: [],
}

