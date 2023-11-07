import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translations } from "./translations.enum";
import { Language } from "@tmw-universe/tmw-universe-types";

import en_US_common from "./locales/en_US/common/common.json";
import en_US_welcome from "./locales/en_US/welcome/welcome.json";
import en_US_tmwu_auth from "./locales/en_US/tmwu/auth.json";
import en_US_user_info from "./locales/en_US/user/user-info.json";

const resources = {
  [Language.en_US]: {
    [Translations.COMMON]: en_US_common,
    [Translations.WELCOME]: en_US_welcome,
    [Translations.USER_INFO]: en_US_user_info,

    // TMW Universe
    [Translations.TMWU_AUTH]: en_US_tmwu_auth,
  },
};

export const i18nsetup = () => {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Language.en_US,
    debug: true,
    resources,
  });
};
