import { FC } from 'react'
import { TextContent } from '../custom-text-component/customText'

export type PropsListCom = {
	item: (
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
	)[]
}
export const ListCom: FC<PropsListCom> = ({ item }) => {
	return (
		<>
			<li className='my-1 border-l-[1px] mb-2 px-2 dark:border-bg-dark-bu border-bg-light-bu/[0.7] '>
				{item.map((item, i) => (
					<TextContent key={i} item={item} />
				))}
			</li>
		</>
	)
}
