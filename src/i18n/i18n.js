import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "~/locales/en/home.json";
import HOME_VI from "~/locales/vi/home.json";
import HOME_RU from "~/locales/ru/home.json";


export const locales = {
  vi: "Tiếng Việt",
  en: "English",
  ru: "Русский",
};
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    home: HOME_EN,
  },
  vi: {
    home: HOME_VI,
  },
  ru: {
    home: HOME_RU,
  },
};

const defaultNS = "home";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ns: ["home"],
    defaultNS: defaultNS,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
