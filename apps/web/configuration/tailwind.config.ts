import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { fontFamilyDisplay, fontFamilyText } from './fontFamily.config';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@storefront-ui/vue/**/*.{js,mjs}', './node_modules/tw-elements/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: [`${fontFamilyDisplay}`, ...defaultTheme.fontFamily.sans],
        body: [`${fontFamilyText}`, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          '50': '#3e4346',
          '100': '#3e4346',
          '200': '#3e4346',
          '300': '#3e4346',
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
        '4xl': '1800px',
        '3xl': '1600px',
        '2xl': '1400px',
        xl: '1200px',
        lg: '992px',
        md: '768px',
        sm: '576px',
        xs: '420px', 
        '2xs': '360px',
      },
    },
  },
 plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas'), require("tw-elements/plugin.cjs")],
} as Config;
