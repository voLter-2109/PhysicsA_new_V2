import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { FC, useState } from 'react'
import Heading from '../../../ui/heading/heading'
import MotionTabPanel from './motion.panel'
import { initialText } from './text-panel'

const ProgramOfPerfomances: FC = () => {
	let [panelTexts] = useState(initialText)
	const [tabIndex, setTabIndex] = useState(0)

	return (
		<>
			<div className='w-full'>
				<Heading>Программа</Heading>
				<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
					<Tab.List className='flex space-x-1 rounded-xl p-1'>
						{Object.keys(panelTexts).map((date, i) => (
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
						{Object.values(panelTexts).map((panelText, idx) => (
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
									<MotionTabPanel key={idx} panelText={panelText} />
								</Transition>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</>
	)
}
// {Object.values(panelTexts).map((panelText, i) => {
// 	return (
// 		selectedIndex === i && (
// 			<MotionTabPanel key={i} panelText={panelText} />
// 			)
// 			)
// })}

export default ProgramOfPerfomances
