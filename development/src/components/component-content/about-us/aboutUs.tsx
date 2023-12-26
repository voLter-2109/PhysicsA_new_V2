import { FC, useContext } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import Heading from '../../../ui/heading/heading'
import { TextContent } from '../organizational-fee/organizationFree'

const AboutUs: FC = () => {
	const { AboutUs } = useContext(TextContext)

	return (
		<div className=' min-h-[70vh] m-auto flex justify-center items-center dark:text-bg-light'>
			<div>
				<Heading className=''>{AboutUs.head}</Heading>
				<div className='[&>p]:indent-4 [&>p]:mb-3 pb-5'>
					{AboutUs.text.map((item, i) => {
						return <TextContent item={item} key={i} />
					})}
					
				</div>
			</div>
		</div>
	)
}

export default AboutUs
