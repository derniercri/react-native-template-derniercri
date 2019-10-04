import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './resources/en.json';
import fr from './resources/fr.json';

const preferredLanguage = RNLocalize.getLocales()[0].languageCode;

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb(preferredLanguage),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: !!__DEV__,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      fr,
    },
  });

export const translate = (key: string) => i18next.t(key);

export default i18next;
