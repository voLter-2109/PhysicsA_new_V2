import cn from 'clsx'
import { FC } from 'react'

enum EType {
	tel = 'tel',
	mailto = 'mailto',
	text = 'text'
}

type LogLevelStrings = typeof EType

type TExternalLinks = {
	hrefLink: string
	typeHref: keyof typeof EType
	className?: string
	text?: string
	enter: boolean
}

const ExternalLinks: FC<TExternalLinks> = ({
	enter,
	hrefLink,
	text = hrefLink,
	typeHref,
	className
}) => {
	const initialClassName =
		'font-medium cursor-pointer text-colors-light-dark dark:text-bg-dark-bu border-b border-bg-light-bu dark:border-bg-dark-bu hover:text-bg-light-bu dark:hover:text-colors-dark-dark'

	const EnterCom = (
		<>
			<br />
			<br />
		</>
	)

	if (typeHref === EType.mailto)
		return (
			<>
				<a
					className={cn(initialClassName, className)}
					href={`${EType.mailto}:${hrefLink}`}
				>
					{text}
				</a>
				{enter && EnterCom}
			</>
		)
	if (typeHref === EType.tel)
		return (
			<>
				<a
					className={cn(initialClassName, className)}
					href={`${EType.tel}:${hrefLink}`}
				>
					{text}
				</a>
				{enter && EnterCom}
			</>
		)

	return (
		<>
			<a
				target='_blank'
				className={cn(initialClassName, className)}
				href={hrefLink}
			>
				{text}
			</a>
			{enter && EnterCom}
		</>
	)
}

export default ExternalLinks
