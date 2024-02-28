/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero_bg_1: "url('./assets/hero_background.jpg')",
        hero_bg_2: "url('./assets/hero_background_2.jpg')",
      },
    },
  },
  plugins: [],
};
