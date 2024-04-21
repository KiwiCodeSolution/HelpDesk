/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#16244E", //синій
        navyBlue: "#030D42", //темно синій
        grey: "#949494", //сірий
        orange: "#E38800", //помаранчевий
        lightblue: "#163998", //світло синій
        heavenly: "#00A0FF", // голубий (яскравий)
      },
      fontFamily: {
        main: "Nunito, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      fontSize: {
        "extra-bold": ["40px", {fontWeight: "800",}], // Extra Bold 40
        "bold-64": ["64px", {fontWeight: "700",}], // Bold 64
        "bold-40": ["40px", {fontWeight: "700",}], // Bold 40
        "bold-32": ["32px", {fontWeight: "700",}], // Bold 32
        "bold-24": ["24px", {fontWeight: "700",}], // Bold 24
        "medium-28": ["28px", {fontWeight: "500",}], // Medium 28
        "medium-20": ["20px", {fontWeight: "500",}], // Medium 20
        "regular-24": ["24px", {fontWeight: "400",}], // Regular 24
        "regular-16": ["16px", {fontWeight: "400",}], // Regular 16
        "medium-14": ["14px", {fontWeight: "500",}], // Medium 14
      },
      backgroundImage: {
        header: "url('/images/bg_header.png')",
      },
      boxShadow: {
        orangeBtnHover: "0px 0px 32px 12px rgba(0,110,175,1)", 
        orangeBtnActive: "0px 0px 16px 1px rgba(0,0,0,1)", 
        blueBtnHover: "0px 0px 16px 4px rgb(0,129,255,1)", 
      },
      screens: {
      'mobile': '767px',
      'tablet': '1023px',
      'laptop': '1439px',
      'desktop': '1440px',
      
    },

    },
  },
  plugins: [],
};
