// 'use client'

import { FC } from 'react'
import { Locale } from '../../i18n.config'
import { getDictionary } from '../../i18n/dictionary'
import HomePage from '../../pages/home/home-page'

type Props = {
	params: { locale: Locale }
}

const RootPage: FC<Props> = async ({ params: { locale } }) => {
	// const RootPage: FC<Props> = () => {
	const { landingPage } = await getDictionary(locale)
	// const test = useContext(MainContext)
	if (landingPage) {
		return (
			<div>
				<HomePage landingPage={landingPage} />
			</div>
		)
	}
}

export default RootPage
