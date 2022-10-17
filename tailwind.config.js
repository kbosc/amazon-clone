/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
