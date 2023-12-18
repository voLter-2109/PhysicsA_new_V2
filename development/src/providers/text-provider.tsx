'use client'

import { ReactNode, createContext } from 'react'
import { IAllText } from '../type/text-page-type'

export const MainContext = createContext({} as IAllText)

type Props = {
	children: ReactNode
	value: any
}

const TextProviderTest = ({ children, value }: Props) => {
	// const { landingPage } = await getDictionary('ru')

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default TextProviderTest
