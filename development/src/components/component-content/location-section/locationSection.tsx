import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import Accordion from '../../../ui/accordion/accordion'
import CustomMap from '../../../ui/custom-map/customMap'
import Heading from '../../../ui/heading/heading'

const LocationSection = () => {
	const [tabIndex, setTabIndex] = useState<number>(0)
	const { LocationSection } = useContext(TextContext)

	return (
		<div className='w-full'>
			<Heading>{LocationSection.head}</Heading>
			<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
				<Tab.List className='flex space-x-1 rounded-xl p-1'>
					{LocationSection.hTabs.map((tab, index) => {
						return (
							<Tab
								key={index}
								className={({ selected }) =>
									cn(
										'w-full rounded-lg py-2.5 font-extrabold text-lg leading-5 text-bg-light',
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
				<Tab.Panels>
					<Tab.Panel className='shadow-lg '>
						<Transition
							show={tabIndex === 0}
							appear
							enter='transition-opacity duration-500'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity duration-500'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Heading className='text-lg'>
								<strong>{LocationSection.bTabs[0].head?.site}</strong> <br />
								{LocationSection.bTabs[0].head?.adress}
							</Heading>
							<CustomMap initialMap={LocationSection.bTabs[0].map} />
						</Transition>
					</Tab.Panel>
					<Tab.Panel className='shadow-lg '>
						<Transition
							show={tabIndex === 1}
							appear
							enter='transition-opacity duration-500'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity duration-500'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							{LocationSection.bTabs[1].listContent && (
								<Accordion
									data={LocationSection.bTabs[1].listContent}
									activeIn={2}
								/>
							)}
						</Transition>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default LocationSection
