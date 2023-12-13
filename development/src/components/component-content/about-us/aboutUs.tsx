import { FC } from 'react'
import Heading from '../../../ui/heading/heading'
import AboutUsText from './aboutUsText'

const AboutUs:FC = () => {
	return (
		<div className=' min-h-[70vh] m-auto flex justify-center items-center dark:text-bg-light'>
			<div>
				<Heading className=''>
					О конференции
				</Heading>
				<div className='[&>p]:indent-4 [&>p]:mb-3 pb-5'>
					<AboutUsText />
				</div>
			</div>
		</div>
	)
}

export default AboutUs
