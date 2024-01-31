import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
	// Step 1: Use the incoming request (example)
	const defaultLocale = request.headers.get('x-default-locale') || 'ru'

	// Step 2: Create and call the next-intl middleware (example)
	const handleI18nRouting = createIntlMiddleware({
		locales: ['ru', 'en'],
		defaultLocale
	})
	const response = handleI18nRouting(request)

	// Step 3: Alter the response (example)
	response.headers.set('x-default-locale', defaultLocale)

	return response
}

export const config = {
	// Match only internationalized pathnames
	matcher: [
		'/',
		'/(ru|en)/:path*',
		'/(ru|en)/profile/:path*',
		'/profile',
		'/(ru|en)/auth/',
		'/auth'
	]
}
