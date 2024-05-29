export interface Cookie {
  name: string;
  accepted?: boolean;
  Lifespan: string;
  script?: string[];
  Provider: string;
  Status: string;
  PrivacyPolicy: string;
}
export interface CookieGroup {
  id?: number;
  name: string;
  accepted: boolean;
  showMore?: boolean;
  description: string;
  cookies: Cookie[];
}
export interface CookieGroupFromNuxtConfig {
  groups: CookieGroup[];
  barTitle: string;
  barDescription: string;
}

export default {
  barTitle: 'CookieBar.about.label',
  barDescription: 'CookieBar.about.description',
  groups: [
    {
      id: 0,
      name: 'CookieBar.essentials.label',
      accepted: true,
      showMore: false,
      description: 'CookieBar.essentials.description',
      cookies: [
        {
          name: 'CookieBar.essentials.cookies.plentyId.name',
          Provider: 'CookieBar.essentials.cookies.plentyId.provider',
          Status: 'CookieBar.essentials.cookies.plentyId.status',
          PrivacyPolicy: '/PrivacyPolicy',
          // Lifespan must respect this format, currently only accepts days.
          Lifespan: 'Session',
          accepted: true,
        },
        {
          name: 'CookieBar.essentials.cookies.vsfLocale.name',
          Provider: 'CookieBar.essentials.cookies.vsfLocale.provider',
          Status: 'CookieBar.essentials.cookies.vsfLocale.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: 'Session',
          accepted: true,
        },
        {
          name: 'CookieBar.essentials.cookies.consentCookie.name',
          Provider: 'CookieBar.essentials.cookies.consentCookie.provider',
          Status: 'CookieBar.essentials.cookies.consentCookie.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '100 days',
          accepted: true,
        },
        {
          name: 'Cloudflare Turnstile',
          Provider: 'Cloudflare',
          Status: 'Necessary for Cloudflare’s Turnstile service.', 
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '100 days',
          accepted: true,
        },
      ],
    },
    {
      id: 1,
      name: 'CookieBar.externalMedia.label',
      showMore: false,
      description: 'CookieBar.externalMedia.description',
      cookies: [],
    },
    {
      id: 2,
      name: 'CookieBar.marketing.label',
      showMore: false,
      description: 'CookieBar.marketing.description',
      cookies: [
        {
            name: 'CookieBar.marketing.cookies.ga4.name',
            Provider: 'CookieBar.marketing.cookies.ga4.provider',
            Status: 'CookieBar.marketing.cookies.ga4.status',
            PrivacyPolicy: 'https://policies.google.com/privacy',
            Lifespan: 'Session',
            script: ['https://www.googletagmanager.com/gtag/js?id=G-EZ1LTWVYXB', 'https://www.googletagmanager.com/gtag/js?id=AW-1002375971','https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/pwa/ga4script.js'], 
        },
      ],
    },
  ],
};
