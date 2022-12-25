/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#E1EFF2',
        customLightGray: '#EFF1F2',
        customNeutral500: '#8C8C8C',
        customNeutral700: '#4D4D4D',
        customNeutral800: '#333333',
        customNeutral900: '#1F1F1F',
        customNeutral1000: '#141414',
        customVolcano500: '#F26726',
        customVolcano600: '#E65117',
        customInfo: '#2B4ACB',
        customSuccess: '#49AA19',
        customWarning: '#D8BD14',
        customError: '#B01212',
      },
    },
  },
  plugins: [],
};
