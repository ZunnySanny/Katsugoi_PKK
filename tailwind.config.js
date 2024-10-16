/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        satu: 'Expletus Sans',
        dua: 'M PLUS Rounded 1c',
        tiga: 'Kalam'
      },
      colors: {
        ungu: "#5D50C6",
        pink: "#f85E9f",
        orange: "#FF5722",
        grey: "#222831",
      },
      dropShadow : {
        "sm-shadow" : [
          
        ]
      }
    },
  },
  plugins: [],
};
