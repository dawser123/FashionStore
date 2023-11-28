/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "primary-color": "#1D232A",
        "secondary-color": "#2F9073",
        "secondary-color-hover": "#1C7656 ",
      },
    },
    screens: {
      xsm: "480px",
      sm: "600px",
      m: "680px",
      lg:"992px"
    },
  },
  plugins: [require("daisyui")],
};
