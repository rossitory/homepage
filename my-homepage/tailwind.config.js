/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#121212',
        customSurface: '#1d1d1d',
        customPrimary: '#3B82F6',
        customPrimaryLight: '#B980FF',
        customSecondary: '#03dac6',
        customOnBackground: '#c6c6c6',
        customOnSurface: '#e1e1e1',
        customOnPrimary: '#070509',
        customOnSecondary: '#000000'
      },

      fontFamily: {
        // Use meaningful labels for your fonts 
        // so you can apply them with classes like `font-mono` or `font-sans`.
        mono: ['"Roboto Mono"', 'monospace'],
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}