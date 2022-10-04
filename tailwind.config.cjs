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
        'home-desktop': "url('/src/assets/home/bg-home-desktop.jpg')",
        'home-tablet': "url('/src/assets/home/bg-home-tablet.jpg')",
        'home-mobile': "url('/src/assets/home/bg-home-mobile.jpg')",
        'destination-desktop': "url('/src/assets/destination/bg-destination-desktop.jpg')",
        'destination-tablet': "url('/src/assets/destination/bg-destination-tablet.jpg')",
        'destination-mobile': "url('/src/assets/destination/bg-destination-tablet.jpg')",
        'crew-desktop': "url('/src/assets/crew/bg-crew-desktop.jpg')",
        'crew-tablet': "url('/src/assets/crew/bg-crew-tablet.jpg')",
        'crew-mobile': "url('/src/assets/crew/bg-crew-mobile.jpg')",
        'tech-desktop': "url('/src/assets/technology/bg-tech-desktop.jpg')",
        'tech-tablet': "url('/src/assets/technology/bg-tech-tablet.jpg')",
        'tech-mobile': "url('/src/assets/technology/bg-tech-mobile.jpg')",
      },

      backgroundColor:{
        'menu': 'rgba(255,255,255,0.04)',
      }
    },
  },
  plugins: [],
}