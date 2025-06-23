/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // for Vite's root HTML
    "./src/**/*.{js,ts,jsx,tsx}", // scans all your React/Vite components
  ],
  theme: {
    extend: {}, // put your custom colors/fonts/etc. here if needed
  },
  plugins: [], // add Tailwind plugins like forms, typography, etc. if required
};
