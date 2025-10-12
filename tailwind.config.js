module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Primary colors (red shades)
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626", // Main primary color
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        // Secondary colors (yellow shades)
        secondary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15", // Main secondary color
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        // Custom theme colors
        background: {
          light: "#f3f3f3",
          dark: "#1a1a1a",
        },
        surface: {
          light: "#ffffff",
          dark: "#2d2d2d",
        },
        text: {
          light: "#1a1a1a",
          dark: "#f3f3f3",
        },
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover", "focus", "dark"],
      borderWidth: ["hover", "focus", "dark"],
      padding: ["hover", "dark"],
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
}
