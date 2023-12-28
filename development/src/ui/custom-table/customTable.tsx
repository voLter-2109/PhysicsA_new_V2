import { FC } from 'react'
import formatterRU from '../../utils/formatterRU'
import Heading from '../heading/heading'

type PropsTableCom = {
	table: {
		head: string
		thead: string[]
		tbody: {
			type: string
			text: string[]
		}[]
	}
}
export const TableCom: FC<PropsTableCom> = ({ table }) => {
	return (
		<>
			<Heading className='text-lg'>{table.head}</Heading>
			<table
				className='w-full  border-separate border-spacing-y-2 
							border-spacing-x-1 table-auto text-center '
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
									className='[&>td]:border-b dark:[&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'
								>
									{item.text.map((item, i) => {
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
													{' '}
													{formatterRU.format(+item)}{' '}
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
		</>
	)
}
