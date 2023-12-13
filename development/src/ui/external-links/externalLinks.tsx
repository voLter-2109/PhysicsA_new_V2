import cn from 'clsx'
import { FC } from 'react'

enum EType {
	tel = 'tel',
	mailto = 'mailto',
	text = 'text'
}

type LogLevelStrings = typeof EType

type TExternalLinks = {
	linkText: string
	type: keyof typeof EType
	className?: string
	text?: string
}
console.log(typeof EType)

const ExternalLinks: FC<TExternalLinks> = ({
	linkText,
	text = linkText,
	type,
	className
}) => {
	const initialClassName =
		'font-medium text-colors-light-dark dark:text-bg-dark-bu border-b border-bg-light-bu dark:border-bg-dark-bu hover:text-bg-light-bu dark:hover:text-colors-dark-dark'

	if (type === EType.mailto)
		return (
			<a
				className={cn(initialClassName, className)}
				href={`${EType.mailto}:${linkText}`}
			>
				{text}
			</a>
		)
	if (type === EType.tel)
		return (
			<a
				className={cn(initialClassName, className)}
				href={`${EType.tel}:${linkText}`}
			>
				{text}
			</a>
		)

	return (
		<a
			target='_blank'
			className={cn(initialClassName, className)}
			href={linkText}
		>
			{text}
		</a>
	)
}

export default ExternalLinks
