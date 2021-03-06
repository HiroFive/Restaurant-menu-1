module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
      maxWidth: {
        '10': '10rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      transitionProperty:{
        'width': 'width',
        'height': 'height'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
