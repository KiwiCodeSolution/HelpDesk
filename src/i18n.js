import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
  ru: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
};

i18next.use(initReactI18next).init({ resources, debug: true, whitelist: ["ua", "ru"] });
