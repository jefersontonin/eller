module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sm': "url('bg-sm.png')",
        'logo': "url('assinatura-sm.png')",
        'promo': "url('promo-sm.png')"
      })
    },
  },
  plugins: [],
}