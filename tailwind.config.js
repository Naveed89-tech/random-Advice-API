module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      boxShadow: {
        rounded: "0 0 15px 8px rgba(82, 255, 168,.5)",
      },
      fontFamily: {
        manrope: "Manrope,sans-serif",
      },
      colors: {
        Light_cyan: "#CEE3E9",
        Neon_Green: "#52FFA8",
        Neutral: {
          Light_Grey: "#959EAC",
          Medium_Grey: "#7C8798",
          Dark_Blue: "#252D37",
          Very_Dark_Blue: "#121417",
        },
      },
    },
  },
  plugins: [],
};
