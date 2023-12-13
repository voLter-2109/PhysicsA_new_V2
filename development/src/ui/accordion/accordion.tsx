import { useState } from 'react'
// import { RiArrowDropDownLine } from 'react-icons/ri'
import AccordionItem from './accordionItem'
import { TDataAccordion } from './textAccordion'
//  accordionitem component

const Accordion = ({
	data,
	activeIn
}: {
	data: TDataAccordion[]
	activeIn: number
}) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(activeIn)

	const handleItemClick = (index: number) => {
		setActiveIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<div className='w-full'>
			{data.map((item, index) => (
				<AccordionItem
					key={index}
					data={item}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	)
}

export default Accordion
