import cn from 'clsx'
import { forwardRef } from 'react'
import { IField } from './feild.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, type = 'text', className, Icon, style, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					{Icon && <Icon size={25} className='mb-2'/>}
					<input
						placeholder={placeholder}
						className={cn(
							'px-4 w-full outline-none border rounded-lg border-gray border-solid focus:border-primary   transition-all'
						)}
						type={type}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && (
					<div className='text-red-500 font-bold mt-1 w-full text-center'>
						{error}
					</div>
				)}
			</div>
		)
	}
)

export default Field
