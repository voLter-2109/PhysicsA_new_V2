/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	// light
	'bg-black': '#000',
	'bg-light': '#ffffff',
	'colors-light-dark': '#3d4d60',
	'colors-light-light': '#ffffff',
	'bg-light-bu': '#c1a583',
	// dark
	'bd-dark': '#222629',
	'colors-dark-dark': '#fce9bf',
	'bg-dark-bu': '#f4a701',
	'colors-dakr-light': '#6a6e71'
}

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		export: {
			fontFamily: { mono: ['var(--font-roboto-mono)'] },
			backgroundImage: {
				'home-black': 'url(./bg-par-black.jpg)',
				'home-light': "url('/bg-par-light.jpg')"
			},
		},
		extends: {}
	},
	darkMode: 'class',
	plugins: [require('autoprefixer')]
}
