/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        "base-100":"#040D12",
        primary:"#011D20",
        secondary:"#0B363E",
        tertiary:"#397689",
        accent:"#5E91A4",
        white:"white",
        black:"black",
      }
    },
  },
  plugins: [],
}

