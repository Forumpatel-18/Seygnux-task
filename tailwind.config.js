/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url(./data/coffeebg.jpg)",
      },
    },
  },
  plugins: [],
};
