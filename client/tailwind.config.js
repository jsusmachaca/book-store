/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'light': '0 10px 8px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
}

