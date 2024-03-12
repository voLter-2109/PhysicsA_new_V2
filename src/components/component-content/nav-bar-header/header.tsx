'use client'

import cn from 'clsx'
import { FC, useContext, useEffect } from 'react'
import { useOutside } from '../../../hooks/useOutside'
import { useWindowSize } from '../../../hooks/useResize'
import { TextContext } from '../../../pages/home/home-page'
import InformationComponent from '../../../ui/header-ui/information'
import LangSwitch from '../../../ui/header-ui/lang-switch'
import ListGroupMenu from '../../../ui/header-ui/list-group-menu'
import ThemeSwitcher from '../../../ui/header-ui/theme-switch'
import IconBurger from '../../../ui/ui-burger-menu/iconBurger'

type Props = {
	activePage: number
}

const Header: FC<Props> = ({ activePage }) => {
	const { width, isScreenXl, isScreenSm } = useWindowSize()
	const { isShow, setIsShow, ref, refOutside } = useOutside(false)

	const { NavBarText } = useContext(TextContext)

	useEffect(() => {
		setIsShow(false)
	}, [width])

	return (
		<div ref={ref}>
			<div className='fixed top-0 w-full z-[41] backdrop-blur-md'>
				<div className=' flex items-center justify-around mx-auto p-4 border-b-2 border-bg-light/5'>
					{!isScreenXl && (
						<div ref={refOutside}>
							<IconBurger setIsShow={setIsShow} open={isShow} />
						</div>
					)}
					<span
						className=' cursor-pointer self-center text-2xl font-semibold
					 text-colors-light-dark dark:text-colors-light-light'
					>
						Physics.SPB
					</span>
					{isScreenXl && (
						<ListGroupMenu
							navLink={NavBarText}
							activePage={activePage}
							classNames='flex flex-row text-center text-lg '
							classNamesLi='items-center whitespace-nowrap'
						/>
					)}

					<div className='flex items-center gap-3'>
						{isScreenSm && <InformationComponent />}
						{isScreenSm && <LangSwitch />}
						<ThemeSwitcher />
					</div>
				</div>
			</div>

			<div
				className={cn(
					'w-[300px] transition-all ease-in duration-300 bg-colors-light-light',
					'h-[100vh] z-10 fixed shadow-2xl top-0 dark:bg-bd-dark ',
					isShow ? 'translate-x-[0]' : 'translate-x-[-350px]'
				)}
			>
				<div>
					<ListGroupMenu
						isShow={isShow}
						navLink={NavBarText}
						activePage={activePage}
						classNames='flex flex-col h-screen justify-around text-center w-fit [&>ul]:flex-col
						 m-auto [&>ul]:text-2xl'
						classNameP=''
						sideBar={true}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
