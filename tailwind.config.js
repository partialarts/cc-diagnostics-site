/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import daisyui from 'daisyui';

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
    typography,
    forms,
    aspectRatio,
    daisyui,
  ],
};
