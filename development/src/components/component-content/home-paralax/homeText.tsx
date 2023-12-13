import { FC } from 'react'
import Heading from '../../../ui/heading/heading'

const HomeText: FC = () => {
	return (
		<>
			{/* <div className=' p-4 pt-20 h-fit dark:h-[100vh] flex items-center dark:flex-col flex-row dark:justify-between justify-between w-full text-bg-dark-bu'> */}
			<div
				className='h-fit flex  items-center m-auto  bg-gradient-to-t w-screen
				to-[rgba(255,0,0,0)] dark:via-[rgba(0,0,0)] via-bg-light-bu dark:from-[rgba(255,0,0,0)] 
				from-[rgba(255,0,0,0)] max-lg:to-90%  max-lg:from-1%  max-lg:from-bg-light-bu/80 max-lg:shadow-lg max-lg:shadow-bg-light-bu/80
				justify-around text-bg-dark-bu flex-col lg:flex-row dark:shadow-bg-black 
				 py-4'
			>
				<Heading
					className='font-extrabold  dark:text-bg-dark-bu
					text-colors-light-dark/100  text-center pb-10 opacity-1'
				>
					PhysicsA <br />
					САНКТ-ПЕТЕРБУРГ
				</Heading>
				<div className='dark:w-fit text-center font-medium [&>p]:text-[20px] dark:text-bg-dark-bu text-colors-light-dark/100'>
					<p>International conference</p>
					<p>23-27 October, 2023</p>
				</div>
			</div>
		</>
	)
}

export default HomeText
