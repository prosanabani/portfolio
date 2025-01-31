import { i18n } from '@lingui/core'

export type TLocale = {
  direction: 'ltr' | 'rtl'
  label: string
  locale: 'ar' | 'en'
}

type LocaleInterface = {
  default: string
  locales: Record<string, TLocale>
  set: (value: TLocale['locale']) => Promise<void>
  toggleLocales: () => Promise<void>
  get value(): TLocale['locale']
}

export const locale: LocaleInterface = {
  default: 'en',
  locales: {
    ar: {
      direction: 'rtl',
      label: 'العربية',
      locale: 'ar',
    },
    en: {
      direction: 'ltr',
      label: 'English',
      locale: 'en',
    },
  },
  async set(value) {
    const localeValue = !value || !this.locales[value] ? this.value : value

    // load and activate locale
    const { messages } = await import(`../locales/${localeValue}.po`)
    i18n.load(localeValue, messages)
    i18n.activate(localeValue)

    // change page direction
    document.documentElement.setAttribute('lang', localeValue)
    document.documentElement.setAttribute(
      'dir',
      this.locales[localeValue].direction
    )

    // set localStorage
    localStorage.setItem('locale', localeValue)
  },
  async toggleLocales() {
    await locale.set(this.value === 'ar' ? 'en' : 'ar')
  },
  get value() {
    return (localStorage.getItem('locale') || this.default) as TLocale['locale']
  },
}

export const defaultLocale = 'en'

export async function dynamicActivate() {
  locale.set(locale.value)
  const { messages } = await import(`../locales/${locale.value}.po`)
  i18n.load(locale.value, messages)
  i18n.activate(locale.value)
}
