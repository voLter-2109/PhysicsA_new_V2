"use client"

import { FC } from 'react'

const Loading: FC = () => {
	return (
		<div className='h-screen w-screen flex justify-center items-center'>
			<h1 className='text-[45px] dark:text-bg-light'>Loading...</h1>
		</div>
	)
}

export default Loading
