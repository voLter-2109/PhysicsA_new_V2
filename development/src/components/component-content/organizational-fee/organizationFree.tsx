import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { FC, useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import { ListCom } from '../../../ui/custom-list/customList'
import { TableCom } from '../../../ui/custom-table/customTable'
import { TextContent } from '../../../ui/custom-text-component/customText'
import Heading from '../../../ui/heading/heading'

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

			<ul>
				{OrganizationFree.list.map((item, i) => {
					return <ListCom key={i} item={item} />
				})}
			</ul>
		</div>
	)
}

export default OrganizationFree
