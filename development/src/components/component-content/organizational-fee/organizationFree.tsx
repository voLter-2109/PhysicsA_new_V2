import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { FC, useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import ExternalLinks from '../../../ui/external-links/externalLinks'
import Heading from '../../../ui/heading/heading'
import formatterRU from '../../../utils/formatterRU'

const OrganizationFree: FC = () => {
	const [tabIndex, setTabIndex] = useState(0)
	const { OrganizationFree } = useContext(TextContext)

	return (
		<div className='[&>div]:mb-10'>
			<Heading>{OrganizationFree.head}</Heading>

			<div>
				<TableCom table={OrganizationFree.table} />
			</div>

			<div className=''>
				<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
					<Tab.List className='flex space-x-1 rounded-xl p-1 shadow-lg'>
						{OrganizationFree.hTabs.map((tab, i) => {
							return (
								<Tab
									key={'htab' + i}
									className={({ selected }) =>
										cn(
											'w-full rounded-lg p-2.5 font-extrabold text-lg leading-5 text-bg-light ',
											selected
												? 'dark:bg-bd-dark dark:text-colors-dark-dark shadow bg-bg-light-bu text-colors-light-dark'
												: ' dark:hover:bg-bd-dark dark:hover:text-colors-dark-dark dark:bg-bd-dark/[0.42] dark:text-bg-dark-bu hover:bg-bg-light-bu bg-bg-light-bu/[0.7] text-colors-light-dark'
										)
									}
								>
									{tab}
								</Tab>
							)
						})}
					</Tab.List>
					<Tab.Panels className='mt-2'>
						{OrganizationFree.bTabs.map((item, i) => {
							return (
								<Tab.Panel
									key={'btab' + i}
									className='shadow-xl p-3 rounded-sm '
								>
									<Transition
										appear
										show={tabIndex == i}
										enter='transition-opacity duration-500'
										enterFrom='opacity-0'
										enterTo='opacity-100'
										leave='transition-opacity duration-500'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'
									>
										{item.map((item, i) => {
											return <TextContent key={i} item={item} />
										})}
									</Transition>
								</Tab.Panel>
							)
						})}
					</Tab.Panels>
				</Tab.Group>
			</div>

			<ul >
				{OrganizationFree.list.map((item, i) => {
					return <ListCom key={i} item={item} />
				})}
			</ul>
		</div>
	)
}

export default OrganizationFree

type PropsTableCom = {
	table: {
		head: string
		thead: string[]
		tbody: {
			type: string
			text: string[]
		}[]
	}
}
export const TableCom: FC<PropsTableCom> = ({ table }) => {
	return (
		<>
			<Heading className='text-lg'>{table.head}</Heading>
			<table
				className='w-full  border-separate border-spacing-y-2 
							border-spacing-x-1 table-auto text-center '
			>
				<thead>
					<tr className='[&>th]:border-b [&>th]:border-b-bg-light-bu dark:[&>th]:border-bg-dark-bu'>
						{table.thead.map((item, i) => {
							return <th key={i}>{item}</th>
						})}
					</tr>
				</thead>
				<tbody className=''>
					{table.tbody.map((item, i) => {
						if (item.type === 'table') {
							return (
								<tr
									key={i}
									className='[&>td]:border-b dark:[&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'
								>
									{item.text.map((item, i) => {
										if (!isNaN(Number(item))) {
											return <td key={i}> {formatterRU.format(+item)} </td>
										}

										return <td key={i}>{item}</td>
									})}
								</tr>
							)
						}

						if (item.type === 'colSpan') {
							return (
								<tr
									key={i}
									className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
								>
									{item.text.map((item, i) => {
										if (!isNaN(Number(item))) {
											return (
												<td colSpan={item.length} key={i}>
													{' '}
													{formatterRU.format(+item)}{' '}
												</td>
											)
										}

										return (
											<td
												colSpan={item.length}
												key={i}
												className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
											>
												{item}
											</td>
										)
									})}
								</tr>
							)
						}
					})}
				</tbody>
			</table>
		</>
	)
}

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
	console.log(item)

	return (
		<>
			<li className='rounded-md my-1 border-l-2 dark:border-bg-dark-bu border-bg-light-bu/[0.7]'>
				{item.map((item, i) => {
					return <TextContent key={i} item={item} />
				})}
			</li>
		</>
	)
}

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
