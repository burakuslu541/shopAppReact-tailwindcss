module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: (theme) => ({
        "brand-color": "#5d3ebc",
      }),
    },
  },
  plugins: [],
};
