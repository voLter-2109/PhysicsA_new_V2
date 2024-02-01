'use client'

import { Transition } from '@headlessui/react'
import { useTimeout } from 'ahooks'
import { NextPage } from 'next'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CiMail } from 'react-icons/ci'
import { PiPassword } from 'react-icons/pi'
import Button from '../../../ui/button/Button'
import Heading from '../../../ui/heading/heading'
import Field from '../../../ui/input/Field'
import { validEmail } from './valid-email'

type IEmailPassword = {
	email: string
	password: string
}

const AuthComponent: NextPage = () => {
	const [type, setType] = useState<'login' | 'register'>('login')
	let [isShowing, setIsShowing] = useState(true)


    

	const login = (data: any) => {
		return 'login'
	}

	const register = (data: any) => {
		return 'register'
	}

	const {
		register: fromRegister,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<Fade>
			<section className='flex items-center h-screen transition-all'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg  p-10 mx-auto shadow-2xl'
				>
					
						<Heading>{type}</Heading>

						<Field
							{...fromRegister('email', {
								required: ' Email is required',
								pattern: { value: validEmail, message: 'enter a valid email' }
							})}
							placeholder='Email'
							Icon={CiMail}
							style={{ marginBottom: '2.5em' }}
							error={errors.email?.message}
						/>
						<Field
							{...fromRegister('password', {
								required: ' Password is required',

								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters long'
								}
							})}
							Icon={PiPassword}
							type='password'
							style={{ marginBottom: '2.5em' }}
							placeholder='Password'
							error={errors.password?.message}
						/>
					<Button className='mb-3' type='submit'>
						<span>Loading...</span>
					</Button>

					<Button
						type='button'
						{...{
							onClick: () => {
								setType(type === 'login' ? 'register' : 'login')
								clearErrors()
							}
						}}
					>
						{type === 'login' ? '...register' : '...login'}
					</Button>
				</form>
			</section>
		</Fade>
	)
}

export default AuthComponent
