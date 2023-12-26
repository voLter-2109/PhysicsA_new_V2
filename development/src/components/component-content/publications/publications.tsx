import { FC, useContext } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import Heading from '../../../ui/heading/heading'
import { ListCom, TextContent } from '../organizational-fee/organizationFree'

const Publications: FC = () => {
	const { Publications } = useContext(TextContext)
	return (
		<>
			<Heading className=''>{Publications.head}</Heading>

			{Publications.text.map((item, i) => {
				return <TextContent item={item} key={i} />
			})}

			<ul>
				{Publications.list.map((item, i) => {
					return <ListCom item={item} key={i} />
				})}
			</ul>
		</>
	)
}

export default Publications
