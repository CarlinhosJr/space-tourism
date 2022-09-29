/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      'belf': ['Bellefair']
    },
    extend: {
      backgroundImage:{
        'home-desktop': "url('./src/assets/home/bg-home-desktop.jpg')",
        'home-tablet': "url('./src/assets/home/bg-home-tablet.jpg')",
        'home-mobile': "url('./src/assets/home/bg-home-mobile.jpg')",
        'destination-desktop': "url('./src/assets/destination/bg-destination-desktop.jpg')",
        'destination-tablet': "url('./src/assets/destination/bg-destination-tablet.jpg')",
        'destination-mobile': "url('./src/assets/destination/bg-destination-mobile.jpg')",
      },

      backgroundColor:{
        'menu': 'rgba(255,255,255,0.04)',
      }
    },
  },
  plugins: [],
}