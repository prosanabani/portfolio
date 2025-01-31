import { type LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  catalogs: [
    {
      exclude: ['**/src/locales', '**/src/*-env.d.ts'],
      include: ['src'],
      path: 'src/locales/{locale}',
    },
  ],
  fallbackLocales: {
    default: 'en',
  },
  format: 'po',
  locales: ['en', 'ar'],
  sourceLocale: 'en',
}

export default config
