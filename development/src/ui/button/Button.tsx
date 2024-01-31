import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

const Button: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...rest }) => {
	// console.log(className)
	return (
		<button
			{...rest}
			className={cn(
				'rounded-2xl font-semibold shadow-md px-12 py-2  text-center',
				className
			)}
		>
			<span>{children}</span>
		</button>
	)
}

export default Button
