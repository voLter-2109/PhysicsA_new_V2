import cn from 'clsx'
import { FC } from 'react'
import ExternalLinks from '../external-links/externalLinks'

type PropsTextCom = {
	item:
		| {
				type: string
				enter: boolean
				text: string

				style: string

				tag?: undefined
				typeLink?: undefined
		  }
		| {
				tag: string
				type: string
				typeLink: string
				text: string
				enter: boolean
				style: string
		  }
}
export const TextContent: FC<PropsTextCom> = ({ item }) => {
	const { enter, style, text, type, tag, typeLink } = item
	const EnterCom = (
		<>
			<br />
			<br />
		</>
	)

	if (type === 'link') {
		return (
			<ExternalLinks
				//@ts-ignore
				linkText={typeLink}
				//@ts-ignore
				type={type}
				text={text}
			/>
		)
	}

	if (type === 'span') {
		return (
			<span className={cn(style)}>
				{text}
				{enter && EnterCom}
			</span>
		)
	}

	if (type === 'italic') {
		return (
			<i className={cn(style)}>
				{text}
				{enter && EnterCom}
			</i>
		)
	}

	if (type === 'strong') {
		return (
			<strong className={cn(style)}>
				{text}
				{enter && EnterCom}
			</strong>
		)
	}

	if (type === 'blockquote') {
		return (
			<blockquote className={cn('m-0 py-1', style)}>
				{text}
				{enter && EnterCom}
			</blockquote>
		)
	}
}
