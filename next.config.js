/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// distDir: 'build',
	output: 'export',
	images: {
		unoptimized: true
	},
	env: {
		SERVER_URL: 'http://localhost:4200/api',
		APP_URL: 'http://localhost:3000',
		YANDEX_API_KEY: 'b6952e57-7566-4f0e-bb8b-23a5ee7b87a5'
	}
}

module.exports = nextConfig
