/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PTSans: ["PT Sans", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
