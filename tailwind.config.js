/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        youtube: {
          red: "#ff0000",
        },
        mt: {
          main: "#5a13bb",
          sub: "#5244cc",
        },
        ft: {
          main1: "#f502c5",
          main2: "#531d96",
        },
        dribble: {
          bg: "#ECE4EC",
          pink: "#ffe6eb",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#5244cc,#5a13bb)",
        "gradient-half": "linear-gradient(80deg, #5244cc 50%, #5a13bb 50%);",
        "gradient-basic": "linear-gradient(to right, #5244cc , #5a13bb );",
        "gradient-br": "linear-gradient(to bottom right, #5244cc , #f502c5 );",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
