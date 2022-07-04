import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationHe from "./he.json";

// the translations
const resources = {
  he: {
    translation: translationHe,
  },
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "he",

    keySeparator: false, // we do not use keys in form messages.welcome
    returnObjects: true,
  });

export default i18n;
