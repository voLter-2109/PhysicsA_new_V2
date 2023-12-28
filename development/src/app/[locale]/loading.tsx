'use client'

import { FC } from 'react'

const Loading: FC = () => {
	return (
		<div className='h-screen flex justify-center items-center'>
			<div>
				<div id='circles'></div>
			</div>
		</div>
	)
}

export default Loading
