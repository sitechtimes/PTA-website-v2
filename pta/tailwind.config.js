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
        'light-brown': '#483221',
        'dark-brown': '#312217',
        'light-yellow': '#fce5ac',
      },
      fontFamily: {
        karla: ['"Karla"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
