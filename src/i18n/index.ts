import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enJson from "./translations/en.json";
import ptJson from "./translations/ptBr.json";
import heJson from "./translations/he.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      he: heJson,
      ptBr: ptJson,
      en: enJson,
    },
  });

export default i18n;
