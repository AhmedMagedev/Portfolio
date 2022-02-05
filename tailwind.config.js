module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "impreza-gray": "#2B2B2B",
        "impreza-orange": "#FE6A3F",
        "impreza-dark": "#161616",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
