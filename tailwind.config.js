/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#00ABE4",
        secondColor: "#374955",
        thirdColor: "#9AAEBB",
      },
    },
  },
  plugins: [],
};
