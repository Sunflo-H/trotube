/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    minWidth: {
      36: "width:9rem",
    },
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
          // bg: "#ECE4EC",
          bg: "#ebf5fc",
          pink: "#ffe6eb",
          red: "#fc9b91",
        },
      },
      height: {
        400: "400px",
        500: "500px",
      },
      maxHeight: {
        200: "200px",
        400: "400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#5244cc,#5a13bb)",
        "gradient-half": "linear-gradient(80deg, #5244cc 50%, #5a13bb 50%);",
        "gradient-basic": "linear-gradient(to right, #5244cc , #5a13bb );",
        "gradient-br": "linear-gradient(to bottom right, #5244cc , #f502c5 );",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        // test: "-1px -1px 1px 1px #000000, 1px 1px 1px 1px black",
        test: " -2px -2px 5px rgba(255, 255, 255, 1),3px 3px 5px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        c7: "repeat(7, minmax(100px, 200px))",
        c8: "repeat(8, minmax(100px, 200px))",
      },
      gridTemplateRows: {
        c2: "repeat(2, minmax(100px, 200px))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
