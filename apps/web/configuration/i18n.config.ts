import type { NuxtI18nOptions } from '@nuxtjs/i18n';
import { getLocaleObject } from './locale.config';

const localeObject = getLocaleObject();

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
  vueI18n: '~/configuration/vueI18n.config.ts',
  detectBrowserLanguage: false,
};
