/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1020px',
        xl: '1440px',
      },
      colors: {
        purple: ' hsl(259, 100%, 65%)',
        light_red: 'hsl(0, 100%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        off_white: 'hsl(0, 0%, 94%)',
        light_grey: 'hsl(0, 0%, 86%)',
        smokey_grey: 'hsl(0, 1%, 44%)',
        off_black: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

