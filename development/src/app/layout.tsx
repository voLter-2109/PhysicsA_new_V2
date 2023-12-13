import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import ThemeComponentProvider from '../providers/theme-provider'
import { getSiteUrl } from '../config/url.config'
import { SITE_NAME } from '../constants/app.constant'
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

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={` ${robotoMono.variable} font-sans`}>
			<body id='root'>
				<ThemeComponentProvider>{children}</ThemeComponentProvider>
			</body>
		</html>
	)
}

