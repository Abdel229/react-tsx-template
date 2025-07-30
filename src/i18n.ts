import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations from http (e.g. public/locales)
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if user language is not available
    debug: true, // Enable debug mode for development

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to your translation files
    },

    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },

    react: {
      useSuspense: true, // Enable Suspense for translations
    },
  });

export default i18n;
