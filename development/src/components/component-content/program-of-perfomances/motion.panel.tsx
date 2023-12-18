import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import { variants } from './animate'

function MotionTabPanel({
	panelText,
	thead
}: {
	panelText: { type: string; start: string; end: string; text: string }[]
	thead: string[]
}) {
	return (
		<Tab.Panel
			as={motion.div}
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			static
		>
			<table
				className='w-full  border-separate border-spacing-y-2 
							border-spacing-x-1 table-auto text-center '
			>
				<thead>
					<tr className='[&>th]:border-b'>
						{thead.map((item, i) => {
							return <th key={i}>{item}</th>
						})}
					</tr>
				</thead>
				<tbody className=''>
					{panelText &&
						panelText.map((text, i) => {
							return text.type === 'colSpan' ? (
								<tr
									className='[&>td]:rounded-3xl dark:[&>td]:bg-bd-dark [&>td]:bg-colors-light-dark/[0.4]'
									key={i}
								>
									<td colSpan={3}>{text.text}</td>
								</tr>
							) : (
								<tr
									className='[&>td]:border-b dark:[&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'
									key={i}
								>
									<td>{text.start}</td>
									<td>{text.end}</td>
									<td>{text.text}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</Tab.Panel>
	)
}

export default MotionTabPanel

// <table className='w-full border-separate border-spacing-y-2 border-spacing-x-1 table-auto text-center '>
// 								<thead>
// 									<tr className='[&>th]:border-b'>
// 										<th>Начало</th>
// 										<th>Конец</th>
// 										<th>Доклад</th>
// 									</tr>
// 								</thead>
// 								<tbody className=''>
// 									<tr className='[&>td]:border-b [&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'>
// 										<td>10:00</td>
// 										<td>11:00</td>
// 										<td>
// 											приглашенный доклад
// 											<br />
// 											Баранов А. Н.
// 											<br />
// 											University of Montpellier
// 											<br />
// 											Cascade lasers grown on group-IV substrates
// 										</td>
// 									</tr>
// 									<tr className='[&>td]:rounded-3xl [&>td]:bg-bd-dark'>
// 										<td colSpan={3}>
// 											председатель - проф. Аверкиев Никита Сергеевич
// 										</td>
// 									</tr>
// 									<tr className='[&>td]:border-b [&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'>
// 										<td>10:00</td>
// 										<td>11:00</td>
// 										<td>
// 											приглашенный доклад \nБаранов А. Н. \nUniversity of
// 											Montpellier \nCascade lasers grown on group-IV substrates
// 										</td>
// 									</tr>
// 									<tr className='[&>td]:border-b [&>td]:border-bg-dark-bu [&>td]:rounded-md [&>td]:p-2'>
// 										<td>10:00</td>
// 										<td>11:00</td>
// 										<td>
// 											приглашенный доклад \nБаранов А. Н. \nUniversity of
// 											Montpellier \nCascade lasers grown on group-IV substrates
// 										</td>
// 									</tr>
// 								</tbody>
// 							</table>
