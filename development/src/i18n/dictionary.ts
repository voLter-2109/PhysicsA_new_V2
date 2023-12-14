import 'server-only'
import { Locale } from '../i18n.config'

const dictionaries = {
	ru: () => import('../messages/ru.json').then(module => module.default),
	en: () => import('../messages/en.json').then(module => module.default)
}

//@ts-ignore
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
