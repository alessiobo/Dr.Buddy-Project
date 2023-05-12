import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from '../src/assets/locale/en/translation.json';
import translationIT from '../src/assets/locale/it/translation.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;