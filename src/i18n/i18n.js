import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../languages/en.json";
import es from "../languages/es.json";

const SELECTED_LANGUAGE = window.localStorage.getItem("lang");
const NAVIGATOR_LANGUAGE = navigator.language.slice(0, 2).includes("es")
  ? "es"
  : "en";

if (!SELECTED_LANGUAGE) window.localStorage.setItem("lang", NAVIGATOR_LANGUAGE);

i18n.use(initReactI18next).init({
  resources: { ...en, ...es },
  lng: SELECTED_LANGUAGE || NAVIGATOR_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
