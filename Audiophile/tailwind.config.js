/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily:{
      'Manrope-Bold':['Manrope-Bold'],
      'Maronpe-Medium':[ 'Manrope-Medium' ],
      'Manrope-Regular':['Manrope-Regular'],
      'Manrope-Light':['Manrope-Regular']
    },
    extend: {

    },
    screens: {
      'sm': '350px',

      'md': '700px',

      'lg': '849px',

      'xl': '1200px',

      '2xl': '1536px',
    }
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
