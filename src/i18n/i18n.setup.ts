import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translations } from "./translations.enum";

import en_US_common from "./locales/en_US/common.json";
import { Language } from "@tmw-universe/tmw-universe-types";

const resources = {
  [Language.en_US]: {
    [Translations.common]: en_US_common,
  },
};

export const i18nsetup = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Language.en_US,
    debug: true,
    resources,
  });
};
