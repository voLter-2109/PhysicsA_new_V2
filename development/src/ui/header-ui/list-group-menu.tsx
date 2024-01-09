'use client'

import { keyframes } from '@emotion/react'
import cn from 'clsx'
import { default as Link } from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { useWindowSize } from '../../hooks/useResize'
import InformationComponent from './information'
import LangSwitch from './lang-switch'

const ListGroupMenu: React.FC<{
	navLink: string[]
	activePage?: number
	classNames?: string
	classNamesLi?: string
	sideBar?: boolean
	classNameP?: string
	isShow?: boolean
}> = ({
	isShow,
	navLink,
	activePage,
	sideBar,
	classNames,
	classNamesLi,
	classNameP
}) => {
	const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

	const { isScreenSm } = useWindowSize()
	return (
		<div className={(cn(' w-auto h-screen '), classNames)}>
			<Fade cascade damping={0.1}>
				<ul
					className={cn(
						'flex font-medium  w-fit',
						classNamesLi && classNamesLi
					)}
				>
					{navLink &&
						navLink.map((link: string, i: number) => {
							return (
								<li key={i} className={cn('group w-fit', sideBar && `mb-5`)}>
									<Link
										href={`/#${i + 1}`}
										className={cn(
											'block mr-4 relative hover:text-bg-light-bu dark:hover:text-colors-dark-dark ',
											'flex flex-row items-baseline justify-center transition-all 0.3s',
											activePage === +(i + 1)
												? 'text-bg-light-bu dark:text-colors-dark-dark'
												: 'text-colors-light-dark dark:text-bg-dark-bu'
										)}
										aria-current='page'
									>
										<span className=' inline-block z-[1]'>{link}</span>
										<p
											className={cn(
												'absolute z-0 top-[95%] bg-colors-light-dark dark:bg-bg-light/90',
												'  w-0 group-hover:w-[100%]  left-0 rounded-md h-[10%] transition-all 0.4s',
												classNameP
											)}
										></p>
									</Link>
								</li>
							)
						})}
				</ul>

				{sideBar && !isScreenSm && (
					<div className='flex flex-col items-center gap-5'>
						<InformationComponent  /> <LangSwitch />
					</div>
				)}
			</Fade>
		</div>
	)
}

export default ListGroupMenu

// animation-[${0.7 * i}s 1 backInLeft]
