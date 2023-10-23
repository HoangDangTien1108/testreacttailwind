/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton'],
        gotham: ['Gotham'],
        gothamBlack: ['Gotham Black'],
        poppins: ['Poppins'],
      },
      colors: {
        navBarViolet:'#925FF0',
        red:'#FA709A',
        orange:'#FEE140',
        yellow:'#FFEC70',
        gray:'#292929',
        green:'#C8FEC7',
        rateGray:'#646464',
        rateBlack:'#0B0B0B',
        grayPtf:'#737373',
        violet:'#BE9FF6',
        violetPtf:'#E9DFFC',
        tViolet:'#784DC7',
        greenAbout:'#84FAB0',
        blueAbout:'#8FD3F4',
        blueName:'#E0C3FC',
        purple:'#8EC5FC',
        yellowCol:'#FFE76A',
        blueCol:'#65C8FF',
        redCol:'#FF0000',
        grayBoder:'#E6E6E6'
      },  
      screens:{
        navBar:'640px',
        designPro:'450px',
        ip12:'391px',
      },

      backgroundImage:{
        'kaleb-image': "url('/public/image/unsplash_wHJ5L9KGTl4.png')"
      },
    },
  },
  plugins: [],
}