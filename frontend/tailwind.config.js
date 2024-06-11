/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'nav': '12vh',
        'menu': '88vh',
        'home': "88vh"
      },
      width: {
        'nav' : '28vw',
        'other': "72vw"
      }
    },
  },
  plugins: [],
}

;