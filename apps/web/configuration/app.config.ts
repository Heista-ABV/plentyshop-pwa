export const appConfiguration = {
  head: {
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
        { name: 'shop-name', content: 'kosmetikspiegel.shop' },
        { name: 'description', content: process.env.METADESC || 'kosmetikspiegel.shop' },
        { name: 'keywords', content: process.env.METAKEYWORDS || 'kosmetikspiegel.shop' },
        { name: 'theme-color', content: '#dabc71' },
        { property: 'og:title', content: process.env.OGTITLE || 'kosmetikspiegel.shop' },
        { property: 'og:image', content: process.env.OGIMAGE || 'https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/favicon.png' },
        { property: 'og:type', content: process.env.OGTYPE || 'website' },
        { property: 'og:url', content: process.env.OGURL || '' },
    ],
    link: [
      { rel: 'icon', href: 'https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/favicon.png' },
      { rel: 'apple-touch-icon', href: 'https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/favicon.png' },
    ],
    title: process.env.STORENAME || 'plentyShop PWA',
  },
};
