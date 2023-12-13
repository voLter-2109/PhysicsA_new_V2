import cn from 'clsx'
import { CSSProperties } from 'react'
import { InView } from 'react-intersection-observer'

type Props = {
	children: React.ReactNode
	onChangeActivePage: (
		inView: boolean,
		entry: IntersectionObserverEntry,
		id: number
	) => void
	id: string
	className?: string
	container?: boolean
	style?: CSSProperties
}

const PageContainer = ({
	onChangeActivePage,
	children,
	container = true,
	id,
	className,
	style
}: Props) => {
	return (
		<InView
			threshold={0.55}
			rootMargin='15px'
			trackVisibility={true}
			delay={100}
			as='div'
			onChange={(inView, entry) => onChangeActivePage(inView, entry, +id)}
		>
			<section
				id={id}
				className={cn(
					' py-10  mb-7 min-h-[70vh] m-auto  shadow-2xl shadow-colors-light-dark/20 rounded-lg',
					container ? 'container px-4 sm:px-6 lg:px-8' : '',
					className
				)}
				style={style}
			>
				{children}
			</section>
		</InView>
	)
}

export default PageContainer
