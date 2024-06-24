// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to your Pokémon App",
      // Agrega más traducciones aquí
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a tu aplicación de Pokémon",
      // Agrega más traducciones aquí
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma por defecto
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;