module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        topbar: " rgb(0 0 0 / 5%) 0px 0px 10px 4px",
      },
      colors: {
         
      },

      fontSize: {
        'logo-icon': "2rem"
      }
    },
    backgroundColor: {},

   
  },
  plugins: [],
};
