const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  // darkMode: class, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: '#1A1C20',
      },
    },
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      colors: {
        'pink-orange': ['#EC4DC7', '#ED823A'],
      },
      background: {
        white: '#FFFFFF',
      },
      borders: {
        // defaults to these values (optional)
        1: '1px',
        2: '2px',
        4: '4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
};
