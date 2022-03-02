module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sm': "url('src/assets/bg-sm.png')",
        'logo': "url('src/assets/assinatura-sm.png')",
        'promo': "url('src/assets/promo-sm.png')"
      })
    },
  },
  plugins: [],
}