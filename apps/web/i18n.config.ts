export default defineI18nConfig(() => ({
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
}));
 