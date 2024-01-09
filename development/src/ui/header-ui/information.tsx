'use client'

import { CalendarDaysIcon, InboxIcon } from '@heroicons/react/20/solid'
import cn from 'clsx'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import { useOutside } from '../../hooks/useOutside'
import { useWindowSize } from '../../hooks/useResize'



const InformationComponent: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<div className='relative' ref={ref}>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				<span
					className={cn(
						'font-medium hover:text-bg-light-bu dark:hover:text-colors-dark-dark',
						isShow
							? 'text-bg-light-bu dark:text-colors-dark-dark'
							: 'text-colors-light-dar dark:text-bg-dark-bu'
					)}
				>
					Важно
				</span>
			</button>
			
				{isShow &&
					createPortal(
						<InformationContent   isShow={isShow} />,
						document.body
					)}
			
		</div>
	)
}

export default InformationComponent

// top-[4.2rem] w-98 -left-[20.5rem]

type Props = {
	isShow: boolean
}

const InformationContent: FC<Props> = ({
	isShow
}) => {
	const { isScreenSm } = useWindowSize()
	
	return (
		<div
			className={cn(
			 	isScreenSm ? 'absolute top-[4.2rem] right-10 w-fit ' :'h-2/3  absolute top-[4.2rem] left-[2.5vw] w-[90vw]  border border-bg-dark-bu',
				'rounded-md dark:bg-bd-dark bg-bg-light-bu rounded-x1 px-7 py-3 text-sm menu z-20 text-bg-light dark:text-colors-dakr-light transition-all  delay-200',
				isShow ? 'open-menu' : 'close-menu'
				// 'open-menu'
			)}
		>
			<div className='text-white mb-5 font-medium'>
				<div className='flex items-center flex-col mb-3'>
					<div className='flex items-center p-2'>
						<CalendarDaysIcon className='w-7 mr-2' />
						График событий
					</div>
					<ul className='[&>*]:p-1 [&>*]:list-disc [&>*]:border-b-[1px] [&>*]:border-red-300'>
						<li>10 марта 2023 – крайний срок подачи тезисов</li>
						<li>10 апреля 2023 – извещение о принятых докладах</li>
						<li>19 мая 2023 – крайний срок подачи статей</li>
						<li>31 мая - опубликованы расширенные тезисы ФизикА.СПб/2022</li>
					</ul>
				</div>
				<div className='flex items-center flex-col mb-3'>
					<div className='flex items-center p-2'>
						<InboxIcon className='w-7 mr-2' />
						Контакты
					</div>
					<a href='mail@physica.spb.ru'>mail@physica.spb.ru</a>
				</div>
			</div>
		</div>
	)
}
