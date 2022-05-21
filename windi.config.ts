import { defineConfig } from '@windicss/plugin-utils'
import colors from 'windicss/colors'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#F5F9FF',
        100: '#EBF3FE',
        200: '#CEE0FD',
        300: '#B1CDFB',
        400: '#76A8F9',
        500: '#3B82F6',
        DEFAULT: '#3B82F6',
        600: '#3575DD',
        700: '#2C62B9',
        800: '#234E94',
        900: '#1D4079',
      },
      black: '#000',
      white: '#fff',
      blue: colors.sky,
      green: colors.green,
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      gray: {
        300: '#BBC3CF',
        400: '#8896AB',
        800: '#333F51',
      },
      purple: colors.purple,
    },
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
})
