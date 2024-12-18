module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E293B', // Deep blue-gray
        secondary: '#475569', // Medium blue-gray
        accent: '#3B82F6', // Vibrant blue
        highlight: '#EF4444', // Accent red
        dark: '#0F172A', // Dark background
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
