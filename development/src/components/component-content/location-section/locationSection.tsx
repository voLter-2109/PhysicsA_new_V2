import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { useState } from 'react'
import Accordion from '../../../ui/accordion/accordion'
import { textAccordionLocationSection } from '../../../ui/accordion/textAccordion'
import CustomMap from '../../../ui/custom-map/customMap'
import Heading from '../../../ui/heading/heading'

const LocationSection = () => {
	const [tabIndex, setTabIndex] = useState<number>(0)

	return (
		<div className='w-full'>
			<Heading>Программа</Heading>
			<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
				<Tab.List className='flex space-x-1 rounded-xl p-1'>
					<Tab
						className={({ selected }) =>
							cn(
								'w-full rounded-lg py-2.5 font-extrabold text-lg leading-5 text-bg-light',
								selected
									? 'dark:bg-bd-dark dark:text-colors-dark-dark shadow bg-bg-light-bu text-colors-light-dark'
									: ' dark:hover:bg-bd-dark dark:hover:text-colors-dark-dark dark:bg-bd-dark/[0.42] dark:text-bg-dark-bu hover:bg-bg-light-bu bg-bg-light-bu/[0.7] text-colors-light-dark'
							)
						}
					>
						1
					</Tab>

					<Tab
						className={({ selected }) =>
							cn(
								'w-full rounded-lg py-2.5 font-extrabold text-lg leading-5 text-bg-light',
								selected
									? 'dark:bg-bd-dark dark:text-colors-dark-dark shadow bg-bg-light-bu text-colors-light-dark'
									: ' dark:hover:bg-bd-dark dark:hover:text-colors-dark-dark dark:bg-bd-dark/[0.42] dark:text-bg-dark-bu hover:bg-bg-light-bu bg-bg-light-bu/[0.7] text-colors-light-dark'
							)
						}
					>
						2
					</Tab>
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
								<strong>Санкт-Петербург</strong> <br />
								гостиница «Спутник» пр. Тореза, 36,
							</Heading>
							<CustomMap />
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
							<Accordion data={textAccordionLocationSection} activeIn={2} />
						</Transition>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}

export default LocationSection
