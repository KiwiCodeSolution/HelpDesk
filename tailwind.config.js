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
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'color-pulse': 'colorPulse 2s infinite',
      },
      keyframes: {
        bell: {
          "0%, 20%, 40%, 60%, 80%, 100%": {
            transform: "rotate(10deg)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "rotate(-10deg)",
          },
        }, 
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        colorPulse: {
          '0%, 100%': { color: '#ffffff' }, // white
          '50%': { color: '#ff9900' }, // orange
        },
      }, 
      fontFamily: {
        main: "Nunito, sans-serif",
        roboto: "Roboto, sans-serif",
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
      'tablet': '768px', // min-width: 767px
      'laptop': '1024px', // min-width: 1023px
      'desktop': '1440px', // min-width: 1440px
    },

    },
  },
  plugins: [],
};
