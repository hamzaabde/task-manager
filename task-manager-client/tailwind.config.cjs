/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx", "src/**/.ts"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
