import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { FC, Fragment, useState } from 'react'
import { TLangSwitch } from '../../type/nav-bar-type'

const LangSwitch: FC<{ langSwitch: TLangSwitch[] }> = ({ langSwitch }) => {
	const [selected, setSelected] = useState(langSwitch[0])

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className='relative'>
				<Listbox.Button className='cursor-pointer rounded-lg dark:bg-bd-dark bg-bg-light pl-3 pr-9'>
					<span className='block dark:text-bg-dark-bu text-colors-light-dark'>
						{selected.lang}
					</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<ChevronUpDownIcon
							className='h-5 w-5 text-colors-light-dark dark:text-bg-dark-bu'
							aria-hidden='true'
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100 '
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options
						className='absolute mt-1 max-h-60 w-full overflow-auto 
					rounded-md bg-bg-light-bu dark:bg-bd-dark dark:ring-colors-dakr-light dark:ring-1 py-1 text-base  border-none 
					focus:outline-none sm:text-sm '
					>
						{langSwitch.map((lang: TLangSwitch, langIdx: number) => (
							// active - выбранный
							<Listbox.Option
								key={langIdx}
								className={({ active }) =>
									`relative dark:text-bg-dark-bu cursor-default select-none py-2 pl-10 pr-4 hover:font-medium `
								}
								value={lang}
							>
								{({ selected }) => (
									<>
										{/* selected - значек */}
										{selected ? (
											<span
												className='dark:text-bg-dark-bu absolute inset-y-0 left-0 flex items-center 
                            					pl-3 text-amber-600 '
											>
												<CheckIcon className='h-5 w-5' aria-hidden='true' />
											</span>
										) : null}
										<span>{lang.lang}</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}

export default LangSwitch
