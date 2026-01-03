// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // ensure exact green if you want (AgroStar green ~ #16a34a)
        agrogreen: '#16a34a', agroyellow:"#f6c23e"
      }
    }
  },
  plugins: [],
}
