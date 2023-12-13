import { useEffect, useState } from 'react'
import {
	SCREEN_LG,
	SCREEN_MD,
	SCREEN_SM,
	SCREEN_XL,
	SCREEN_XXL
} from '../constants/app.constant'

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = (event: UIEvent) => {
			const w = event.target as Window
			event.target && setWidth(w.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width,
		isScreenSm: width >= SCREEN_SM,
		isScreenMd: width >= SCREEN_MD,
		isScreenLg: width >= SCREEN_LG,
		isScreenXl: width >= SCREEN_XL,
		isScreenXxl: width >= SCREEN_XXL
	}
}
