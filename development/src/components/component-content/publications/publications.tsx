import { FC, useContext } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import ExternalLinks from '../../../ui/external-links/externalLinks'
import Heading from '../../../ui/heading/heading'

const Publications: FC = () => {
	const { Publications } = useContext(TextContext)
	return (
		<>
			<Heading className=''>{Publications.head}</Heading>
			{Publications.text.map((item, i) => {
				if (item.tag === 'span') {
					return (
						<span key={i}>
							{item.text}
							{item.enter && (
								<>
									<br />
									<br />
								</>
							)}
						</span>
					)
				}

				if (item.tag === 'link') {
					return (
						<ExternalLinks
							key={i}
							//@ts-ignore
							linkText={item.typeLink}
							//@ts-ignore
							type={item.type}
							text={item.text}
						/>
					)
				}
			})}
			<ol className='list-disc'>
				{Publications.list.map((item, i) => (
					<li
						className=''
						key={i}
					>
						{item}
					</li>
				))}
			</ol>
		</>
	)
}

export default Publications
