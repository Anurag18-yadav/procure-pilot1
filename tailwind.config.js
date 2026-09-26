/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-container': '#0B2447',
        'tertiary-container': '#CEA62C',
      }
    },
  },
  plugins: [],
}