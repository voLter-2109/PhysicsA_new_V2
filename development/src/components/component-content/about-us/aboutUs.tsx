import { FC, useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { TextContext } from '../../../pages/home/home-page'
import Heading from '../../../ui/heading/heading'
import { TextContent } from '../organizational-fee/organizationFree'

const AboutUs: FC = () => {
	const { AboutUs } = useContext(TextContext)

	const content = AboutUs.text.map((item, i) => (
		<TextContent item={item} key={i} />
	))

	return (
		<>
			<div className='min-h-[70vh] m-auto flex justify-center items-center dark:text-bg-light'>
				<div>
					
						<Heading>{AboutUs.head}</Heading>
						<div className='[&>p]:indent-4 [&>p]:mb-3 pb-5'>{content}</div>
					
				</div>
			</div>
		</>
	)
}

export default AboutUs
