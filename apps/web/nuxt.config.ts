// https://nuxt.com/docs/api/configuration/nuxt-config
import cookieConfig from './cookie.config';

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: '» kosmetikspiegel.shop' },
        { name: 'theme-color', content: '#dabc71' },
      ],
      link: [
        { rel: 'icon', href: 'https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/favicon.png' },
        { rel: 'apple-touch-icon', href: 'https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/favicon.png' },
      ],
    },
  },
  appConfig: {
    titleSuffix: '» kosmetikspiegel.shop',
    fallbackCurrency: 'GBP',
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  css: ['~/assets/style.scss'],
  image: {
    screens: {
      '4xl': 1800,
      '3xl': 1600,
      '2xl': 1400,
      xl: 1200,
      lg: 992,
      md: 768,
      sm: 576,
      xs: 420,
      '2xs': 360,
    },
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Red Hat Display': { wght: [400, 500, 700] },
          'Red Hat Text': { wght: [300, 400, 500, 700] },
        },
      },
    ],
    '@nuxtjs/turnstile',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'de',
            file: 'de.json',
          },
        ],
        langDir: 'lang',
        defaultLocale: 'de',
      },
    ],
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-lazy-hydrate',
  ],
  // eslint-disable-next-line unicorn/expiring-todo-comments
  // TODO: build is consistently failing because of this. check whether we need pre-render check.
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
  turnstile: {
    siteKey: process.env?.CLOUDFLARE_TURNSTILE_SITE_KEY,
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },
  site: {
    url: '',
  },
  sitemap: {
    xslColumns: [
      // URL column must always be set, no value needed
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
    autoLastmod: true,
    sitemaps: {
      'sitemap/content': {
        exclude: [
          '/en/**', // default language
          '/search',
          '/offline',
          '/my-account/**',
          '/readonly-checkout',
          '/set-new-password',
          '/reset-password-success',
          '/cart',
          '/checkout',
          '/thank-you',
          '/wishlist',
          '/login',
          '/signup',
          '/reset-password',
        ],
        includeAppSources: true,
      },
    },
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'product',
        path: '/:slug?/:slug_2?/:slug_3?/:slug_4?/:slug_5?/:slug_6?_:itemId',
        file: __dirname + '/pages/product/[slug].vue',
      });
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? 'http://localhost:8181',
      apiEndpoint: process.env.API_ENDPOINT ?? 'https://mevofvd5omld.c01-14.plentymarkets.com',
      cookieGroups: cookieConfig,
      showNetPrices: true,
      logoUrl: (process.env.API_URL ?? 'http://localhost:8181') + '/images/logo.png',
      turnstileSiteKey: process.env?.CLOUDFLARE_TURNSTILE_SITE_KEY ?? '',
      newsletterFromShowNames: process.env?.NEWSLETTER_FORM_SHOW_NAMES === '1' ?? false,
      useAvif: process.env?.USE_AVIF === '1' ?? false,
      useWebp: process.env?.USE_WEBP === '1' ?? false,
      validateReturnReasons: process.env.VALIDATE_RETURN_REASONS === '1' ?? false,
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,json,css,html,ico,svg,png,webp,ico,woff,woff2,ttf,eit,otf}', 'icons/*'],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          // @ts-ignore
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    }, 
    manifest: {
      name: 'plentyshop PWA',
      short_name: 'plentyshopPWA',
      theme_color: '#dabc71',
      icons: [
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
  },
});
