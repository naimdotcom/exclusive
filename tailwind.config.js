/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cs-white_color": "var(--white_color)",
        "cs-black_363738": "var(--black_363738)",
        "cs-white_F5F5F5": "var(--white_F5F5F5)",
        "cs-white_FEFAF1": "var(--white_FEFAF1)",
        "cs-white_FFFFFF": "var(--white_FFFFFF)",
        "cs-text_whiteFAFAFA": "var(--text_whiteFAFAFA)",
        "cs-text_black7D8184": "var(--text_black7D8184)",
        "cs-text_black000000": "var(--text_black000000)",
        "cs-text_whitef9f9f9": "var(--text_whitef9f9f9)",
        "cs-redDB4444": "var(--redDB4444)",
        "cs-button00FF66": "var(--button00FF66)",
        "cs-hoverE07575": "var(--hoverE07575)",
        "cs-hoverA0BCE0": "var(--hoverA0BCE0)",
      },

      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
