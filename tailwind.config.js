/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: ["group-hover"],
    },
    fontFamily: {
      monsterrat: "sans-serif",
      roboto: "sans-serif",
    },
    backgroundImage: {
      clear_sky_day: "url('/src/assets/bg/clear_sky_day.png')",
    },
    animation: {
      "spin-slow": "spin 30s linear infinite",
      bounce: "bounce 1s infinite",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
