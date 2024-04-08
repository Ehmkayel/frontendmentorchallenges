/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '900px',
      xl: '1440px'

    },

    extend: {
      colors:{
        darkViolet: 'hsl(256, 26%, 20%)',
        grayishBlue: 'hsl(216, 30%, 68%)',
        veryDarkViolet: 'hsl(270, 9%, 17%)',
        darkGrayishViolet: 'hsl(273, 4%, 51%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'hero-background': "url('./images/bg-pattern-how-we-work-mobile.svg')",
        
        
      }
    },
  },
  plugins: [],
}

