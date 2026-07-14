/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cybertruckBlackBg: "#111111",
        cybertruckGrayBg: "#1A1A1A",
        cybertruckGrayBorder: "#C7C7C7",
        cybertruckGrayText: "#C7C7C7",
        cybertruckSlideBg: "#151516",
      },
    },
  },
  plugins: [],
};
