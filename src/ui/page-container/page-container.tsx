import cn from 'clsx'
import { CSSProperties } from 'react'
import { Fade } from 'react-awesome-reveal'
import { InView } from 'react-intersection-observer'
import CustomWaves from '../../pages/home/CustomWaves'

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
						'  min-h-[70vh] max-md:min-h-fit text-justify m-auto ',
						' scroll-mt-10  py-4 ',
						container ? 'container lg:max-w-[70vw] relative' : '',
						className
					)}
					style={style}
				>
					<div className=''>{children}</div>
				</section>
			</Fade>
			<CustomWaves />
		</InView>
	)
}

export default PageContainer
