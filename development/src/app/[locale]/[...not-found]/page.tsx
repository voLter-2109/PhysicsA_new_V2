import { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center'>
				<span className='norFound404 text-[10rem]'>404</span>
				<span className='text-center text-[2rem]'>Здесь ты не найдёшь того, что ищешь. Что бы ты ни искал</span>
			<Link href={'/'}>
				<span className='norFound404 text-[5rem] p-2 pb-3 hover:shadow-2xl transition-all duration-300 rounded-lg'>go home?</span>
			</Link>
		</div>
	)
}

export default Page
