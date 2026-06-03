/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tg-green': '#006A4E',
        'tg-yellow': '#FFCE00',
        'tg-red': '#DE2910',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#8b5cf6',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
