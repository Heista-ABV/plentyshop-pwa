import type { NuxtI18nOptions } from '@nuxtjs/i18n';

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
};
