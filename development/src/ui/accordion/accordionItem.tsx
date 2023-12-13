import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import cn from 'clsx'
import { MouseEventHandler, useRef } from 'react'
import { TDataAccordion } from './textAccordion'

const AccordionItem = ({
	data,
	isOpen,
	onClick
}: {
	data: TDataAccordion
	isOpen: boolean
	onClick: MouseEventHandler<HTMLButtonElement>
}) => {
	const contentHeight = useRef<HTMLDivElement>(null)
	return (
		<div className='w-full mb-1 '>
			<button
				className={cn(
					'w-full border-b-2 flex items-center justify-center rounded-lg py-2.5 font-medium text-lg leading-5',
					isOpen
						? ' dark:border-bd-dark  shadow border-bg-light-bu '
						: ' dark:hover:border-bd-dark  dark:border-bd-dark/[0.42]  hover:border-bg-light-bu border-bg-light-bu/[0.7] '
				)}
				onClick={onClick}
			>
				<p>{data.header}</p>
				<ChevronDoubleDownIcon
					width={30}
					className={`transition-all 0.4s ease ${isOpen ? 'rotate-180' : ''}`}
				/>
			</button>

			<div
				ref={contentHeight}
				className='overflow-hidden border-bg-black transition-all 0.4s ease'
				style={
					isOpen
						? { height: contentHeight.current?.scrollHeight }
						: { height: '0px' }
				}
			>
				<ul>
					{data.body.map((item, i) => (
						<li
							className='rounded-md my-1 border-l-2 dark:border-bg-dark-bu border-bg-light-bu/[0.7]'
							key={i}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AccordionItem
