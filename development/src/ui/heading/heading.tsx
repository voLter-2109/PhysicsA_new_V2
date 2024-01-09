import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return (
		<h1 className={cn("text-center text-opacity-80  text-[4rem] max-md:text-[2rem]  mb-3", className)}>
			{children}
		</h1>
	)
}

export default Heading