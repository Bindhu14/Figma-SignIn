/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8faff",
        link: "#346bd4",
        "secondary-text": "#858585",
        white: "#fff",
        mediumslateblue: "#605bff",
        "field-color-darker": "#eaeaea",
        darkgray: "#999",
        black: "#000",
        background: "#f5f5f5",
        gray: "#fcfcff",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
