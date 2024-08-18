/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccLightBlue: "#3fb5e5",
        ccDarkBlue: "#2b2d65",
        ccAliceBlue: "#f0f9fd",
        ccWhiteSmoke: "#f6f6f6"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
};
