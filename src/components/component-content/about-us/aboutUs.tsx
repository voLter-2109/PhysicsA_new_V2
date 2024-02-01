import { FC, useContext } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import { TextContent } from '../../../ui/custom-text-component/customText'
import Heading from '../../../ui/heading/heading'
import SwiperComponent from '../slider/slider'

const AboutUs: FC = () => {
	const { AboutUs } = useContext(TextContext)

	const content = AboutUs.text.map((item, i) => (
		<TextContent item={item} key={i} />
	))

	return (
		<>
			<div className='m-auto flex justify-center items-center dark:text-bg-light'>
				<div>
					<Heading>{AboutUs.head}</Heading>
						<div className='[&>p]:indent-4 [&>p]:mb-3 pb-5'>{content}</div>
				
				</div>
			</div>
		</>
	)
}

export default AboutUs
