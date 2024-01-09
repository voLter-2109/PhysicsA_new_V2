'use client'

import Link from 'next/link'

const CustonNotFound = () => {
	const norFound404 = {
		fontFamily: 'sans-serif',
		letterSpacing: '2px',
		textShadow:
			'10px 10px 10px rgb(255 255 255), 1px -1px 0 rgb(255 255 255), -1px 1px 0 rgb(255 255 255), 1px 1px 0 rgb(255 255 255)'
	}

	return (
		<div
			className='w-screen h-screen flex flex-col justify-center 
        items-center [&>span]:mb-5 text-center bg-bg-black text-colors-light-light'
		>
			<span style={norFound404} className=' text-[8rem] '>
				404
			</span>
			<span className=' text-[1rem]'>
				Здесь ты не найдёшь того, что ищешь. Что бы ты ни искал
			</span>
			<Link href={'/'}>
				<button className='text-[2rem] border rounded-lg p-2 shadow-[5px_7px_15px] hover:shadow-[5px_7px_25px] transition-all duration-300'>
					вернешься на конференцию?
				</button>
			</Link>
		</div>
	)
}

export default CustonNotFound
