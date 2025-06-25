import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LANGUAGES } from "../constant/languages.constant.ts";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./resources/en.json"),
      },
      fa: {
        translation: require("./resources/fa.json"),
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fa"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export const changeLanguage = (lng) => {
  const language = LANGUAGES.find((lang) => lang.code === lng) || LANGUAGES[0];
  document.documentElement.lang = lng;
  document.documentElement.dir = language.dir;
  return i18n.changeLanguage(lng);
};

export default i18n;
