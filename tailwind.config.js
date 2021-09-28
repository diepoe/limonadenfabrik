const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sharpie: [
          "'Sharpie VF'",
          "'Sharpie'",
          ...defaultTheme.fontFamily.serif,
        ],
        branch: ["'Branch'", ...defaultTheme.fontFamily.serif],
        cyrene: ["'Cyrene'", ...defaultTheme.fontFamily.serif],
        kyivsans: [
          "'Kyiv Sans VF'",
          "'Kyiv Sans'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        bluegray: colors.blueGray,
        lemon: colors.yellow,
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: [
              "'Kyiv Sans VF'",
              "'Kyiv Sans'",
              ...defaultTheme.fontFamily.sans,
            ],
            color: "#333",
            h1: {
              fontWeight: "400",
              fontFamily: "'Branch'",
            },
            h2: {
              fontWeight: "400",
              fontFamily: "'Branch'",
            },
            h3: {
              fontWeight: "400",
              fontFamily: "'Branch'",
            },
            h4: {
              fontWeight: "400",
              fontFamily: "'Branch'",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
