import { FC, useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'

const HomeText: FC = () => {
	const { HomeText } = useContext(TextContext)
	const [isHover, setIsHover] = useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}
	const handleMouseLeave = () => {
		setIsHover(false)
	}
	const styleBox = {
		transition: 'clip-path 1s',
		clipPath: !isHover
			? 'polygon(70% 0, 100% 0, 100% 100%, 30% 100%)'
			: 'polygon(60% 0, 100% 0, 100% 100%, 20% 100%)'
	}

	return (
		<div className=' flex flex-row'>
			<div className=' w-1/3   min-h-[100vh] flex flex-col justify-center px-5 dark:text-colors-light-light'>
				<div
					className='font-extrabold text-[70px]  text-center
				   pb-10 opacity-1'
				>
					<p>{HomeText.title_two}</p>
					<p>{HomeText.title}</p>
				</div>
				<div className='dark:w-fit text-center font-medium text-[30px]  '>
					<p>{HomeText.subtitle_two}</p>
					<p>{HomeText.subtitle}</p>
				</div>
			</div>
			<div
				className="
				dark:bg-[url('/bg-par-black.jpg')]
				bg-[url('/bg-par-light.jpg')]
				 bg-cover 
				absolute top-0 right-0 w-[100vw] min-h-[100vh]"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={styleBox}
			></div>
		</div>
	)
}

export default HomeText

// 'h-fit flex  items-center m-auto  bg-gradient-to-t w-screen
// 				to-[rgba(255,0,0,0)] dark:via-[rgba(0,0,0)] via-bg-light-bu dark:from-[rgba(255,0,0,0)]
// 				from-[rgba(255,0,0,0)] max-lg:to-90%  max-lg:from-1%  max-lg:from-bg-light-bu/80 max-lg:shadow-lg max-lg:shadow-bg-light-bu/80
// 				justify-around text-bg-dark-bu flex-col lg:flex-row dark:shadow-bg-black
// 				 py-4'
