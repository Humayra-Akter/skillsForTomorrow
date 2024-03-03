/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FB1C61",
          secondary: "#FFD442",
          accent: "#5AAB96",
          neutral: "#00acdf",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
