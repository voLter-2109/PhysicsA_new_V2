import { useContext } from 'react'
import { useWindowSize } from '../../../hooks/useResize'
import { TextContext } from '../../../pages/home/home-page'
import LangSwitch from '../../../ui/header-ui/lang-switch'
import ListGroupMenu from '../../../ui/header-ui/list-group-menu'
import ThemeSwitcher from '../../../ui/header-ui/theme-switch'

const Footer = () => {
	const { NavBarText } = useContext(TextContext)
	const { width, isScreenXl } = useWindowSize()

	return (
		<div
			className=' w-full p-4 shadow-[0_10px_20px_0px_rgba(0,0,0,0.1)_inset] inset bg-bg-light
		 dark:bg-bd-dark flex  items-center justify-around'
		>
			<span
				className='transition-all .3s cursor-pointer self-center text-lg font-semibold
			 text-colors-light-dark dark:text-bg-dark-bu dark:hover:text-colors-dark-dark'
			>
				Physics.SPB
			</span>
			
		</div>
	)
}

export default Footer
