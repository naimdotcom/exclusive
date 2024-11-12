/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cs_white: "var(--white)",
        "cs_dark-charcoal": "var(--dark-charcoal)",
        "cs_light-gray": "var(--light-gray)",
        "cs_off-white": "var(--off-white)",
        "cs_pure-white": "var(--pure-white)",
        "cs_light-text-gray": "var(--light-text-gray)",
        "cs_gray-medium": "var(--gray-medium)",
        cs_black: "var(--black)",
        "cs_red-primary": "var(--red-primary)",
        "cs_green-button": "var(--green-button)",
        "cs_red-hover": "var(--red-hover)",
        "cs_blue-hover": "var(--blue-hover)",
      },

      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
