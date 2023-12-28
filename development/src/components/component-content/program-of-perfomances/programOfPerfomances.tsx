import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { FC, useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import { TableCom } from '../../../ui/custom-table/customTable'
import Heading from '../../../ui/heading/heading'
import { variants } from '../../../utils/animateTabs'

const ProgramOfPerfomances: FC = () => {
	const { ProgramOfPerfomances } = useContext(TextContext)
	const [tabIndex, setTabIndex] = useState<number>(0)

	return (
		<>
			<div className='w-full'>
				<Heading>{ProgramOfPerfomances.head}</Heading>

				<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
					<Tab.List className='flex space-x-1 rounded-xl p-1'>
						{ProgramOfPerfomances.hTabs.map((date, i) => (
							<Tab
								key={date + i}
								className={({ selected }) =>
									cn(
										'w-full rounded-lg py-2.5 font-extrabold text-lg leading-5 text-bg-light',
										selected
											? 'dark:bg-bd-dark dark:text-colors-dark-dark shadow bg-bg-light-bu text-colors-light-dark'
											: ' dark:hover:bg-bd-dark dark:hover:text-colors-dark-dark dark:bg-bd-dark/[0.42] dark:text-bg-dark-bu hover:bg-bg-light-bu bg-bg-light-bu/[0.7] text-colors-light-dark'
									)
								}
							>
								{date}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels>
						{ProgramOfPerfomances.bTabs.map((tabBody, idx) => {
							return (
								<Tab.Panel key={idx} className='shadow-lg '>
									<Transition
										appear
										show={tabIndex == idx}
										enter='transition-opacity duration-500'
										enterFrom='opacity-0'
										enterTo='opacity-100'
										leave='transition-opacity duration-500'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'
									>
										<Tab.Panel
											as={motion.div}
											variants={variants}
											initial='hidden'
											animate='visible'
											exit='hidden'
											static
										>
											<TableCom table={tabBody} />
										</Tab.Panel>
									</Transition>
								</Tab.Panel>
							)
						})}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</>
	)
}

export default ProgramOfPerfomances
