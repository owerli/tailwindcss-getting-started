/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'md': '0 16px 16px rgba(1, 1, 1, 0.25)',
      }
    },
  },
  plugins: [],
}
