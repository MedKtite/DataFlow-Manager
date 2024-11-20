module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          'Dark-gray': '#181818',
          'lighter-gray': '#282828',
          'off-white': '#FAFAFB',
          'light-gray': '#92929D',
          'dark-blue': '#171F34',
          'dark-slate': '#1C1C24',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          success: '#82C43C',
          danger: '#FC5A5A',
          'hade-blue': '#1E75FF',
          purple: '#A461D8',
          yellow: '#FFC542',
          orange: '#FF974A',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Custom class for Poppins
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}