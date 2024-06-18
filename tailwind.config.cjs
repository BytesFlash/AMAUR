/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
      },
    },
  },
  plugins: [],
};

/* background: linear-gradient(to bottom, #b3cdc6, #fff9f2);
background: #fff9f2
background-color: #5ec8b3; Botton */