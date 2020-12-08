const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  purge: ['./src/**/*.js', './public/index.html'],
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar"
    })
  ]
};