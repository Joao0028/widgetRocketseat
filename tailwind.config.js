/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        cor:{
          roxoClaro: "#685ED9",
          roxoEscuro: "#4439C7",
          branco: "#fafafa",
          brancoEscuro: "#e3e1e4",
          cinza: "#75747a",
          cinzaEscuro: "#2f2f33",
          preto: "#0c0c0d",
          amarelo: "#faf2e7",
          amareloEcuro: "#f5d9ad"
        }
      }
    },
  },
  plugins: [],
}

