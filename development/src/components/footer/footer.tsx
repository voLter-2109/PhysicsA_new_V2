import ThemeSwitcher from '../../ui/header-ui/theme-switch'

const Footer = () => {
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
			{/* <ListGroupMenu
				navLink={navLink}
				classNames='items-center text-center text-sm '
				classNamesLi='items-center whitespace-nowrap flex flex-row max-lg:flex-col [&>li]:m-0'
			/> */}
			<div className='flex '>
				{/* <LangSwitch langSwitch={langSwitch} /> */}
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Footer
