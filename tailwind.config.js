/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
      },
    },
    screens: {
        sm:'480px',
        md:'768px',
        lg:'1024px',
    },
    extend: {
      backgroundImage: {
        "HeroImage": "url('/src/assets/hiro.png')",
        "ShopHiroImage": "url('/src/assets/shopHiro.png')"
      }
    },
  },
  plugins: [],
}