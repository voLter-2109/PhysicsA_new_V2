import { localeConst } from './constants/app.constant'

export const i18n = {
	defaultLocale: localeConst[0],
	locales: localeConst
} as const

export type Locale = (typeof i18n)['locales'][number]
