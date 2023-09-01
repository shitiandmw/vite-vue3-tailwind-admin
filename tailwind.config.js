/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bc': '#82ebeb',
        'ec': '#f7b2a2',
        'primary': '#3b82f6',
        'accent': '#8BC34A',
        'bprimary': '#001528',
        'bminor': '#000c17',
        'bmprimary':"#002140",
        'baccent': '#f1f5f9',

      },
      borderWidth: {
        10: '10px',
      },
      inset: {
        '1/5': '20%',
        '2/5': '40%',
        '2.5': '0.625rem',
        '0.5': '0.125rem',
      },
      margin: {
        14.5: '3.7rem',
      },
      width: {
        13: '3.25rem',
        18: '4.5rem',
        120: '30rem',
      },
      height: {
        13: '3.25rem',
        18: '4.5rem',
      },
      minHeight: {
        14: '3.5rem',
      },
    },
  },
  plugins: [],
};
