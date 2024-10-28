/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '10px'
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif']
      }
    }
  },
  plugins: []
};
