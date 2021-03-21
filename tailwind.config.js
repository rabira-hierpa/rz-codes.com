module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      padding: ["hover"],
    },
  },
  plugins: [],
}
