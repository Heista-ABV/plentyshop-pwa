import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#c4b599',
          '100': '#c4b599',
          '200': '#c4b599',
          '300': '#c4b599',
          '400': '#c4b599',
          '500': '#dabc71',
          '600': '#dabc71',
          '700': '#dabc71',
          '800': '#dabc71',
          '900': '#dabc71',
          '950': '#dabc71', 
        },
        secondary: {
          '50': '#3e4346',
          '100': '#3e4346',
          '200': '#3e4346',
          '300': '#3e4346',
          '400': '#3e4346',
          '500': '#3e4346',
          '600': '#3e4346',
          '700': '#3e4346',
          '800': '#3e4346',
          '900': '#3e4346',
          '950': '#3e4346',
        },
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1366px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px', 
        '2xs': '360px',
      },
    },
  },
 plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
} as Config;
