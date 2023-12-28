import cn from 'clsx'
import { Metadata } from 'next'
import { Bree_Serif, Mystery_Quest, Roboto_Mono } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { getSiteUrl } from '../../config/url.config'
import { SITE_NAME, localeConst } from '../../constants/app.constant'
import { Locale, i18n } from '../../i18n.config'
import ThemeComponentProvider from '../../providers/theme-provider'
import './global.css'
import NotFound from './not-found'

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono'
})

const robotoMono2 = Bree_Serif({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-bree-serif'
})

const robotoMono1 = Mystery_Quest({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mystero-mono'
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
	// console.log(locale)
	if (!localeConst.includes(locale as any)) {
		return (
			<html>
				<body id='root'>
					<>
						<NotFound />
					</>
				</body>
			</html>
		)
	}

	return (
		<html
			lang={locale}
			className={` ${robotoMono2.variable}, ${robotoMono.variable} ${robotoMono1.variable}`}
		>
			<body
				id='root'
				className={cn(locale === 'en' ? 'font-mystero' : 'font-mono')}
			>
				<ThemeComponentProvider>{children}</ThemeComponentProvider>
			</body>
		</html>
	)
}

export default RootLayout
