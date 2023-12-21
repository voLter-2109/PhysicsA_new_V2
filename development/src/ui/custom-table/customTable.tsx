import Heading from '../heading/heading'

function CustomTable({
	tableContent
}: {
	tableContent: {
		type: string
		head: string
		thead: string[]
		tbody: {
			type: string
			one: string
			two: string
			text: string
		}[]
	}
}) {
	return (
		<>
			<Heading className='text-lg'>{tableContent.head}</Heading>
			<table
				className='w-full  border-separate border-spacing-y-2 
							border-spacing-x-1 table-auto text-center '
			>
				<thead>
					<tr className='[&>th]:border-b'>
						{tableContent.thead.map((item, i) => {
							return <th key={i}>{item}</th>
						})}
					</tr>
				</thead>
				<tbody className=''>
					{tableContent &&
						tableContent.tbody.map((text, i) => {
							return text.type === 'colSpan' ? (
								<tr
									className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
									key={i}
								>
									<td colSpan={3}>{text.text}</td>
								</tr>
							) : (
								<tr
									className='[&>td]:border-b dark:[&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'
									key={i}
								>
									<td>{text.one}</td>
									<td>{text.two}</td>
									<td>{text.text}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</>
	)
}

export default CustomTable

