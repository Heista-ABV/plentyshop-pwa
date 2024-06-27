import type { NuxtI18nOptions } from '@nuxtjs/i18n';

export default {
  fallbackLocale: 'de',
  detectBrowserLanguage: false,
  numberFormats: {    
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR', 
        currencyDisplay: 'symbol',
      },
    },
  },
};

export const nuxtI18nOptions: NuxtI18nOptions = {
  locales: [
    {
      code: 'de',
      file: 'de.json',
    },
  ],
  langDir: 'lang',
  defaultLocale: 'de',
  strategy: 'prefix_and_default',
};
