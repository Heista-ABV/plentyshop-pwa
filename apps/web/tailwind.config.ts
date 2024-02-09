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
          '50': '#dabc71',
          '100': '#dabc71',
          '200': '#dabc71',
          '300': '#dabc71',
          '400': '#dabc71',
          '500': '#dabc71',
          '600': '#dabc71',
          '700': '#dabc71',
          '800': '#146276',
          '900': '#dabc71',
          '950': '#dabc71', 
        },
        secondary: {
          '50': '#fffde7',
          '100': '#fffcc1',
          '200': '#fff787',
          '300': '#ffea42',
          '400': '#ffd90f',
          '500': '#f1c002',
          '600': '#cf9400',
          '700': '#a56903',
          '800': '#88520b',
          '900': '#74430f',
          '950': '#442204',
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
