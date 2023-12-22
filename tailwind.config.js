/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#003073",
        secondary: "#33B899",
        seafoam: "#33B899",
        darknavy: "#052757",
        navy: "#003073",
        link: "#4F6CC4",
        highlight: "#F0F4FF",
        background1: "#F8F8F8",
        background2: "#D1DDFF",
        assisted: "#FF4081",
        home_care: "#FF8A00",
        nursing_homes: "#408CFF",
        ccrc: "#FFBF00",
        idp: "#24B34C",
        memory: "#24B34C",
        alzheimers: "#FF8A00",
        senior: "#FF4081",
        faDarkGray: "#4E4E4E",
        faDavysGray: "#525252",
        faDimGray: "#525252",
        faGray: "#828282",
        faSilver: "#AAAAAA",
        faTimberwolf: "#D0D0D0",
        faGrayWhite: "#EBEBEB",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        openSans: "var(--font-open-sans)",
      },
      fontSize: {
        xss: "0.625rem"
      },
    },
    plugins: [],
  },
};
