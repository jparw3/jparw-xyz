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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
