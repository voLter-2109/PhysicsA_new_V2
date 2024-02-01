import { FC, useContext } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import { ListCom } from '../../../ui/custom-list/customList'
import { TextContent } from '../../../ui/custom-text-component/customText'
import Heading from '../../../ui/heading/heading'

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
