import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "991px",
      xl: "1024px",
    },
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Abril_Fatface: ["Abril Fatface", "serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
        },
      },
      extend: {},
      colors: {
        textColorTwo: "#697694",
        white: "#fff",
        primaryColor: "#003B6D",
        bgOne: "#F0F9FF",
        bgTwo: "#FF8800",
        mainBg: "E1E71FF",
        textColorOne: "#324162",
        bgThree: "#f2f2f2",
        royalBlue: "#1e71ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
