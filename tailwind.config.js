const tailwindColors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      soup: {
        50: "#e8e5e7",
        100: "#c6bec4",
        200: "#a1939d",
        300: "#7b6876",
        400: "#5e4758",
        500: "#42273b",
        600: "#3c2335",
        700: "#331d2d",
        800: "#2b1726",
        900: "#1d0e19",
        A100: "#ff5fca",
        A200: "#ff2cb9",
        A400: "#f800a5",
        A700: "#df0094",
      },
      can: {
        50: "#fdfcfd",
        100: "#fbf7fa",
        200: "#f9f1f7",
        300: "#f6ebf4",
        400: "#f4e7f1",
        500: "#f2e3ef",
        600: "#f0e0ed",
        700: "#eedceb",
        800: "#ecd8e8",
        900: "#e8d0e4",
      },
      gray: tailwindColors.gray,
      red: tailwindColors.red,
      green: tailwindColors.green,
    },
  },
  plugins: [],
};
