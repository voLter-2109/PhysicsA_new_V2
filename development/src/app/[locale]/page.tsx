import { FC } from 'react'
import { Locale } from '../../i18n.config'
import { getDictionary } from '../../i18n/dictionary'
import HomePage from '../../pages/home/home-page'

type Props = {
	params: { locale: Locale }
}

const RootPage: FC<Props> = async ({ params: { locale } }) => {
	const { landingPage } = await getDictionary(locale)
	console.log(landingPage)
	return (
		<div>
			<HomePage landingPageText={landingPage} />
		</div>
	)
}

export default RootPage
