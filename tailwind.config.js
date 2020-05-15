module.exports = {
  theme: {
    extend: {
      screens: {
        '2xl' : {'min': '1680px'},
      },

      margin: {
        '-26': '-6.5rem',
        '-28': '-7rem',
        '-30': '-7.5rem'
      },

      padding: {
        '0.5': '0.125rem',
        '0.25': '.0625rem'
      },
      maxWidth:
      {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          '3/5': '60%',
          '4/5': '80%',
          '5/9': '55.5555556%'

      },

      height:
      {
          '1/2': '50%',
          '3/5': '60%',
          '3/4': '75%'
      },

      fontFamily:
      {
        main: [ 'Josefin Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        permanent: ['Permanent Marker', 'cursive']
      },

      colors: 
      {
          brand: '#d1bfa7', //Soft Gold
          accent: '#bd8c7d', //Rose Gold
          primary: '#f7f7f8',
          secondary: '#8e8e90', //Silver
          onyx: '#49494b'
      },

    },
  },
  variants: {},
  plugins: [],
}
