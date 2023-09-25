/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
      primary: {
        100: 'hsl(212, 45%, 89%)',
        200: 'hsl(220, 15%, 55%)',
        300: 'hsl(218, 44%, 22%)',
    },
    },
    fontFamily: {
      body: ['Outfit']
    }
  },
  },
  plugins: [],
}

