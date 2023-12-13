import cn from 'clsx'
import { default as Link } from 'next/link'
import { TNavLink } from '../../type/nav-bar-type'

const ListGroupMenu: React.FC<{
	navLink: TNavLink[]
	activePage?: number
	classNames?: string
	classNamesLi?: string
	classNameP?: string
	isShow?: boolean
}> = ({
	navLink,
	activePage,
	classNames,
	classNamesLi,
	isShow,
	classNameP
}) => {
	// useEffect(() => {
	// 	console.log(activePage)
	// }, [activePage])
	return (
		<div
			className={(cn('flex items-center justify-between w-auto '), classNames)}
		>
			<ul
				className={cn(
					'flex font-medium w-fit',
					classNamesLi ? classNamesLi : ''
				)}
			>
				{navLink.map((link: TNavLink, i: number) => {
					return (
						<li
							key={i}
							className={cn(
								isShow ? 'animate__backInLeft w-fit ' : '',
								'group m-3'
							)}
						>
							<Link
								href={link.href}
								onClick={() => console.log('click link' + isShow)}
								className={cn(
									'block mr-4 relative hover:text-bg-light-bu dark:hover:text-colors-dark-dark ',
									'flex flex-row items-baseline justify-center',
									activePage === +link.id
										? 'text-bg-light-bu dark:text-colors-dark-dark'
										: 'text-colors-light-dark dark:text-bg-dark-bu'
								)}
								aria-current='page'
							>
								<span className=' inline-block z-[1]'>{link.text}</span>
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
		</div>
	)
}

export default ListGroupMenu
