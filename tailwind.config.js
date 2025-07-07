/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Montserrat", "sans-serif"],
      },
      colors:{
        "twitter-blue":"#1DA1F2",
      },
    },
  },
  plugins: [],
};
