import cn from 'clsx'
import { CSSProperties } from 'react'
import { Fade } from 'react-awesome-reveal'
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
			<Fade>
				<section
					id={id}
					className={cn(
						' py-10  mb-7 min-h-[60vh] max-md:min-h-fit text-justify m-auto ',
						'shadow-2xl shadow-colors-light-dark/20 rounded-lg scroll-mt-10  ',
						container ? 'container lg:max-w-[70vw] px-4 sm:px-6 lg:px-8' : '',
						className
					)}
					style={style}
				>
					{children}
				</section>
			</Fade>
		</InView>
	)
}

export default PageContainer
