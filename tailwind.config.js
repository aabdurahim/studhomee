/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'main': '#f1f3f4',
      'main-text': "#4c85d3",
      'logo': '#5985d4',
      'hero': '#acceeb',
      'hero-text': '#05203e',
      'hero-block': '#00466d',
      'hero-btext': '#333456',
      'red-1': '#d63939',
      'blue-1': '#4299e1',
      'blue-2': '#206bc4',
      'orange-1': '#f76707'
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}