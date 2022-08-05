/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        cta: '#FFCE31',
        primary: '#1849C6',
        black: '#000103B2'
      },
      padding: {
        'sm': '0.9375rem', 
        'md': '1.125rem',
        'l': '1.875rem',
      },
      borderRadius: {
        '10': '10px',
      },
      fontFamily: {
        sans: ['poppins', ...fontFamily.sans],
        // serif: ['poppins', ...fontFamily.serif]
      },
      maxWidth: {
        'container': '1245px'
      }
    },
  },
  plugins: [],
}
