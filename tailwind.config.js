/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "emerald", 
      "dracula",
      "business",
      "lofi"
    ],
    darkTheme: "dracula",
  },
  
  plugins: [require("daisyui"), require('@tailwindcss/container-queries')],
}

