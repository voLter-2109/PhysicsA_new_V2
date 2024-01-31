'use client'

import Link from 'next/link'

const CustonNotFound = () => {


	return (
		<div
			className='w-screen h-screen flex flex-col justify-center 
        items-center [&>span]:mb-5 text-center bg-bg-black text-colors-light-light'
		>
			<span className=' text-[8rem] '>
				404
			</span>
			<span className=' text-[1rem]'>
				Здесь ты не найдёшь того, что ищешь. Что бы ты ни искал
			</span>
			<Link href={'/'}>
				<button className='text-[2rem] border rounded-lg p-2 hover:shadow-[4px_6px_15px] shadow-2xl  transition-all duration-300'>
					вернешься на конференцию?
				</button>
			</Link>
		</div>
	)
}

export default CustonNotFound
