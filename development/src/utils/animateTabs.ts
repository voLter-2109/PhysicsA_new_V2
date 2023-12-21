import { Variants } from 'framer-motion'

export const variants: Variants = {
	visible: {
		opacity: 1,
		transition: { duration: 0.1, delay: 0.2, ease: 'ease' }
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
			ease: 'easeOut'
		}
	}
}
