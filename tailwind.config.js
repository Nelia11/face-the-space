/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif']
      },
      screens: {
        phone: '376px',
        tablet: '769px',
        desktop: '1440px',
        sm501: '501px'
      }
    }
  },
  plugins: []
};
