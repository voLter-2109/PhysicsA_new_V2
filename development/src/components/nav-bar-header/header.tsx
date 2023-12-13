'use client'

import cn from 'clsx'
import { FC, useEffect } from 'react'
import { useOutside } from '../../hooks/useOutside'
import { useResize } from '../../hooks/useResize'
import { TLangSwitch, TNavLink } from '../../type/nav-bar-type'
import InformationComponent from '../../ui/header-ui/information'
import LangSwitch from '../../ui/header-ui/lang-switch'
import ListGroupMenu from '../../ui/header-ui/list-group-menu'
import ThemeSwitcher from '../../ui/header-ui/theme-switch'
import IconBurger from '../../ui/ui-burger-menu/iconBurger'

export const navLink: TNavLink[] = [
	{ href: '#1', text: 'Home', id: '1' },
	{ href: '#2', text: 'about us', id: '2' },
	{ href: '#3', text: 'Программа', id: '3' },
	{ href: '#4', text: 'Фото', id: '4' },
	{ href: '#5', text: 'Школа', id: '5' },
	{ href: '#6', text: 'ОргВзнос', id: '6' },
	{ href: '#7', text: 'Публикации', id: '7' }
]

export const langSwitch: TLangSwitch[] = [
	{ id: 1, lang: 'Eng' },
	{ id: 2, lang: 'Rus' }
]

const Header: FC<{ activePage: number }> = ({ activePage }) => {
	const { isScreenLg, isScreenXl } = useResize()
	const { isShow, setIsShow, ref } = useOutside(false)

	useEffect(() => {
		if (isScreenLg) {
			setIsShow(false)
		}
	}, [isScreenLg])

	return (
		<>
			<div
				ref={ref}
				className='bg-bg-light dark:bg-bd-dark fixed w-full z-[41]'
			>
				<div className=' flex items-center justify-around mx-auto p-4 shadow-lg'>
					{!isScreenXl && (
						<div>
							<IconBurger setIsShow={setIsShow} open={isShow} />
						</div>
					)}
					<span className='transition-all .3s cursor-pointer self-center text-2xl font-semibold text-colors-light-dark dark:text-bg-dark-bu dark:hover:text-colors-dark-dark'>
						Physics.SPB
					</span>
					{isScreenXl && (
						<ListGroupMenu
							navLink={navLink}
							activePage={activePage}
							classNames='flex flex-row text-center text-lg '
							classNamesLi='items-center whitespace-nowrap'
						/>
					)}

					<div className='flex items-center gap-3'>
						<InformationComponent />
						<LangSwitch langSwitch={langSwitch} />
						<ThemeSwitcher />
					</div>
				</div>
			</div>

			<div
				className={cn(
					'w-[300px] transition-all ease-in duration-300 bg-colors-light-light  ',
					'h-[100vh] z-10 fixed shadow-2xl top-0 dark:bg-bd-dark ',
					isShow ? 'translate-x-[0]' : 'translate-x-[-350px]'
				)}
			>
				<ListGroupMenu
					isShow={isShow}
					navLink={navLink}
					activePage={activePage}
					classNames='flex flex-col mt-[15vh] text-center w-fit [&>ul]:flex-col m-auto [&>ul]:text-2xl'
					classNamesLi='animate__backInLeft'
					classNameP=''
				/>
			</div>
		</>
	)
}

export default Header
