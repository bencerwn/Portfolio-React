/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'headerButton': '-5px -5px 3px -2px rgba(255,255,255,0.8)',
      }
    },
  },
  plugins: [],
}
