module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 300: "#699bf7", 700: "#0575e6" },
        indigo: { 900: "#022889", "900_01": "#021b79" },
        blue_gray: { 900: "#333333", "900_75": "#33333375" },
        gray: { 200: "#eeeeee" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0575e6,#022889,#021b79)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
