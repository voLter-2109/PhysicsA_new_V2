'use client'

import cn from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { localeConst } from '../../constants/app.constant'

const LangSwitch = () => {
	const pathName = usePathname()
	const router = useRouter()
	const [selected, setSelected] = useState(pathName?.split('/')[1])

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale
		setSelected(locale)
		return router.replace(segments.join('/'))
	}

	return (
		<div className='flex flex-row w-fit h-fit  border rounded-xl overflow-hidden border-bg-dark-bu'>
			{localeConst.map((item, i) => {
				return (
					<button
						key={i}
						onClick={() => {
							redirectedPathName(item)
						}}
						className={cn(
							'flex-1 text-center px-4 transition-all 2s ',
							selected === item && 'bg-bg-dark-bu'
						)}
					>
						{item}
					</button>
				)
			})}
		</div>
	)
}

export default LangSwitch

// <Listbox value={selected} onChange={setSelected}>
// 			<div className='relative'>
// 				<Listbox.Button className='cursor-pointer rounded-lg dark:bg-bd-dark bg-bg-light pl-3 pr-9'>
// 					<span className='block dark:text-bg-dark-bu text-colors-light-dark'>
// 						{selected}
// 					</span>
// 					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
// 						<ChevronUpDownIcon
// 							className='h-5 w-5 text-colors-light-dark dark:text-bg-dark-bu'
// 							aria-hidden='true'
// 						/>
// 					</span>
// 				</Listbox.Button>
// 				<Transition
// 					as={Fragment}
// 					leave='transition ease-in duration-100 '
// 					leaveFrom='opacity-100'
// 					leaveTo='opacity-0'
// 				>
// 					<Listbox.Options
// 						className='absolute mt-1 max-h-60 w-full overflow-auto
// 					rounded-md bg-bg-light-bu dark:bg-bd-dark dark:ring-colors-dakr-light dark:ring-1 py-1 text-base  border-none
// 					focus:outline-none sm:text-sm '
// 					>
// 						{localeConst.map((lang, i) => (
// 							// active - выбранный
// 							<Listbox.Option
// 								key={i}
// 								className={({ active }) =>
// 									`relative dark:text-bg-dark-bu cursor-default select-none py-2 pl-10 pr-4 hover:font-medium `
// 								}
// 								onClick={() => redirectedPathName(lang)}
// 								value={lang}
// 							>
// 								{({ selected }) => (
// 									<>
// 										{/* selected - значек */}
// 										{selected ? (
// 											<span
// 												className='dark:text-bg-dark-bu absolute inset-y-0 left-0 flex items-center
//                             					pl-3 text-amber-600 '
// 											>
// 												<CheckIcon className='h-5 w-5' aria-hidden='true' />
// 											</span>
// 										) : null}
// 										<span>{lang}</span>
// 									</>
// 								)}
// 							</Listbox.Option>
// 						))}
// 					</Listbox.Options>
// 				</Transition>
// 			</div>
// 		</Listbox>
