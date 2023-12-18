'use client'

import { ThemeProvider } from 'next-themes'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const ThemeComponentProvider: FC<PropsWithChildren> = ({ children }) => {
	const [mounted, setMounted] = useState<boolean>(false)


	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			{children}
		</ThemeProvider>
	)
}

export default ThemeComponentProvider
