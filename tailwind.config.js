/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton'],
        gotham: ['Gotham']
      },
      colors: {
        navBarViolet:'#925FF0',
        red:'#FA709A',
        orange:'#FEE140',
        yellow:'#FFEC70',
        gray:'#292929',
        green:'#C8FEC7',
        rateGray:'#646464',
        grayPtf:'#737373',
        violet:'#BE9FF6',
        violetPtf:'#E9DFFC',
        tViolet:'#784DC7',
        buttonPtf:'#292929',
      },  
      screens:{
        navBar:'640px',
        designPro:'450px',
      },
    },
  },
  plugins: [],
}