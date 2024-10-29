/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "HeroImage": "url('/src/assets/hiro.png')",
        "ShopHiroImage": "url('/src/assets/shopHiro.png')"
      }
    },
  },
  plugins: [],
}