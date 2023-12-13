import cn from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

const SButton = styled.button`
	display: block;
	cursor: pointer;
	height: 30px;
	width: 30px;
	z-index: 21;

	&.change .bar1 {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	&.change .bar2 {
		opacity: 0;
	}

	&.change .bar3 {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}
`

const Div = styled.div`
	width: 30px;
	height: 3px;
	margin: 6px 0;
	transition: 0.4s;
`

type Props = {
	setIsShow: Dispatch<SetStateAction<boolean>>
	open: boolean
}

const IconBurger = ({ setIsShow, open }: Props) => {
	return (
		<SButton
			className={cn(
				open && 'change',
				'[&>div]:bg-bg-black dark:[&>div]:bg-bg-dark-bu'
			)}
			onClick={() => {
				setIsShow(prev => !prev)
			}}
		>
			<Div className='bar1'></Div>
			<Div className='bar2'></Div>
			<Div className='bar3'></Div>
		</SButton>
	)
}

export default IconBurger
