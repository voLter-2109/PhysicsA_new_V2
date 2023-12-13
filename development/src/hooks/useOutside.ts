import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOutside = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisible: boolean): TypeOutside => {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	// useEffect(() => {
	// 	console.log(isShow)
	// }, [isShow])

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		window.addEventListener('scroll', () => setIsShow(false))

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
			window.addEventListener('scroll', () => setIsShow(false))
		}
	})

	return { ref, isShow, setIsShow }
}
