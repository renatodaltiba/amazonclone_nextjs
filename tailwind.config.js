module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232F3E',
          default: '#131921'
        }
      }
    }
  },
  plugins: []
}
