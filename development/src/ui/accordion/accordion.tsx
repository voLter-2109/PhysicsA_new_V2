import { useState } from 'react'
// import { RiArrowDropDownLine } from 'react-icons/ri'
import { PropsListCom } from '../../components/component-content/organizational-fee/organizationFree'
import AccordionItem from './accordionItem'

//  accordionitem component

export type TDataAccordion = {
    name: string;
    list: {
        type: string;
        enter: boolean;
        text: string;
        style: string;
    }[][];
}


const Accordion = ({
	data,
	activeIn
}: {
	data: TDataAccordion[]
	activeIn: number
}) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(activeIn)
	// console.log(data)
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
