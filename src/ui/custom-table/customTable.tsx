'use client'

import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import cn from 'clsx'
import { FC, useRef } from 'react'
import { useWindowSize } from '../../hooks/useResize'
import formatterRU from '../../utils/formatterRU'
import Heading from '../heading/heading'

type PropsTableCom = {
	scroll?: boolean
	table: {
		head: string
		thead: string[]
		tbody: {
			type: string
			text: string[]
		}[]
	}
}
export const TableCom: FC<PropsTableCom> = ({ table, scroll }) => {
	const tabRef = useRef<HTMLDivElement>(null)
	// useEffect(() => {
	// 	const height = tabRef.current?.offsetWidth
	// 	console.log(height)
	// }, [tabRef])
	const { isScreenXS } = useWindowSize()
	return (
		<>
			<Heading className='text-lg max-md:text-base'>{table.head}</Heading>
			<div
				ref={tabRef}
				className={cn(
					!isScreenXS && scroll && 'overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-bg-light py-2'
				)}
			>
				<table
					className='w-full  border-collapse border-spacing-y-2 
							border-spacing-x-1 table-auto text-center shadow-2xl '
				>
					<thead>
						<tr className='[&>th]:border-b [&>th]:border-b-bg-light-bu dark:[&>th]:border-bg-dark-bu'>
							{table.thead.map((item, i) => {
								return <th key={i}>{item}</th>
							})}
						</tr>
					</thead>
					<tbody className=''>
						{table.tbody.map((item, i) => {
							if (item.type === 'table') {
								return (
									<tr
										key={i}
										className='[&>td]:border-b dark:[&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2
										[&>th]:border-b dark:[&>th]:border-bg-dark-bu [&>th]:rounded-md [&>th]:p-2 
									'
									>
										{item.text.map((item, i) => {
											if (i === 0) {
												return <th key={i}>{item}</th>
											}
											if (!isNaN(Number(item))) {
												return <td key={i}> {formatterRU.format(+item)} </td>
											}

											return <td key={i}>{item}</td>
										})}
									</tr>
								)
							}

							if (item.type === 'colSpan') {
								return (
									<tr
										key={i}
										className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
									>
										{item.text.map((item, i) => {
											if (!isNaN(Number(item))) {
												return (
													<td colSpan={item.length} key={i}>
														{formatterRU.format(+item)}
													</td>
												)
											}

											return (
												<td
													colSpan={item.length}
													key={i}
													className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
												>
													{item}
												</td>
											)
										})}
									</tr>
								)
							}
						})}
					</tbody>
				</table>
			</div>
			{!isScreenXS && scroll && (
				<div className='flex flex-row w-full justify-center'>
					<span>Scroll</span> <ArrowsRightLeftIcon width={30} height={20} />
				</div>
			)}
		</>
	)
}
