import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { FC, ReactNode } from 'react'
import { getSiteUrl } from '../../config/url.config'
import { SITE_NAME, localeConst } from '../../constants/app.constant'
import { Locale, i18n } from '../../i18n.config'
import ThemeComponentProvider from '../../providers/theme-provider'
import './global.css'

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
	icons: {
		icon: '/logo.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME
	}
}

type Props = {
	children: ReactNode
	params: { locale: Locale }
}

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout: FC<Props> = async ({ children, params: { locale } }) => {
	if (!localeConst.includes(locale as any)) notFound()

	return (
		<html lang={locale} className={` ${robotoMono.variable} font-sans`}>
			<body id='root'>
				<ThemeComponentProvider>{children}</ThemeComponentProvider>
			</body>
		</html>
	)
}

export default RootLayout
