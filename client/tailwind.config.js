const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      twitch: {
        DEFAULT: "#9145ff",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
