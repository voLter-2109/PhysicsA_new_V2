'use client'

import { FC, createContext, useCallback, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import PageContainer from '../../ui/page-container/page-container'

import { YMaps } from '@pbe/react-yandex-maps'
import dynamic from 'next/dynamic'
import AboutUs from '../../components/component-content/about-us/aboutUs'
import Footer from '../../components/component-content/footer/footer'
import HomeText from '../../components/component-content/home-paralax/homeText'
import Header from '../../components/component-content/nav-bar-header/header'
import Publications from '../../components/component-content/publications/publications'
import Error from '../../components/error/error'
import { TLandingPage } from '../../type/text-page-type'

// import dynamic from 'next/dynamic'
// import AboutUs from '../../components/component-content/about-us/aboutUs'
// import HomeText from '../../components/component-content/home-paralax/homeText'
// import Publications from '../../components/component-content/publications/publications'
// import Error from '../../components/error/error'
// import Footer from '../../components/footer/footer'
// import Header from '../../components/nav-bar-header/header'

// import AboutUsInfo from '../../components/component-content/about-us/aboutUsInfo'
// import ProgramOfPerfomances from '../../components/component-content/program-of-perfomances/programOfPerfomances'
// import SwiperComponent from '../../components/component-content/slider/slider'

const DynamicLocationSection = dynamic(
	() =>
		import(
			'../../components/component-content/location-section/locationSection'
		),
	{
		loading: () => <p>Loading...</p>
	}
)
const DynamicProgramOfPerfomances = dynamic(
	() =>
		import(
			'../../components/component-content/program-of-perfomances/programOfPerfomances'
		),
	{
		loading: () => <p>Loading...</p>
	}
)
const DynamicSwiperComponent = dynamic(
	() => import('../../components/component-content/slider/slider'),
	{
		loading: () => <p>Loading...</p>
	}
)
const DynamicOrganizationFree = dynamic(
	() =>
		import(
			'../../components/component-content/organizational-fee/organizationFree'
		),
	{
		loading: () => <p>Loading...</p>
	}
)

type Props = {
	landingPage: TLandingPage
}

export const TextContext = createContext({} as TLandingPage)

const HomePage: FC<Props> = ({ landingPage }) => {
	const [activePage, setActivePage] = useState<number>(1)

	const onChangeActivePage = useCallback(
		(inView: boolean, entry: IntersectionObserverEntry, id: number) => {
			if (id && inView) setActivePage(+id)
		},
		[]
	)

	// useWhyDidYouUpdate('useWhyDidYouUpdateComponent', {
	// 	landingPage,
	// 	activePage,
	// 	onChangeActivePage,
	// 	TextContext
	// })

	return (
		<>
			<TextContext.Provider value={landingPage}>
				<div className='flex flex-col'>
					<Header activePage={activePage} />
					{/* //!база и компоненты готовы */}
					<PageContainer
						onChangeActivePage={onChangeActivePage}
						id='1'
						container={false}
						className="h-[100vh] flex  relative shadow-2xl justify-end dark:bg-bd-dark  dark:bg-[url('/bg-par-black.jpg')] bg-[url('/bg-par-light.jpg')]"
						style={{
							backgroundAttachment: 'fixed',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover'
						}}
					>
						{/* //!база и компоненты готовы */}
						<ErrorBoundary fallback={<Error />}>
							<HomeText />
						</ErrorBoundary>
					</PageContainer>

					<PageContainer onChangeActivePage={onChangeActivePage} id='2'>
						<ErrorBoundary fallback={<Error />}>
							<AboutUs />
						</ErrorBoundary>
					</PageContainer>
					{/* //!база и компоненты готовы */}
					<PageContainer onChangeActivePage={onChangeActivePage} id='3'>
						<ErrorBoundary fallback={<Error />}>
							<DynamicProgramOfPerfomances />
						</ErrorBoundary>
					</PageContainer>

					{/* //!база и компоненты готовы */}
					<PageContainer onChangeActivePage={onChangeActivePage} id='4'>
						<ErrorBoundary fallback={<Error />}>
							<DynamicSwiperComponent />
						</ErrorBoundary>
					</PageContainer>

					<PageContainer
						onChangeActivePage={onChangeActivePage}
						className='min-h-[80vh]'
						id='5'
					>
						<ErrorBoundary fallback={<Error />}>
							<YMaps
								query={{
									apikey: process.env.YANDEX_API_KEY,
									lang: 'en_RU',
									load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl'
								}}
							>
								<DynamicLocationSection />
							</YMaps>
						</ErrorBoundary>
					</PageContainer>

					<PageContainer onChangeActivePage={onChangeActivePage} id='6'>
						<ErrorBoundary fallback={<Error />}>
							<DynamicOrganizationFree />
						</ErrorBoundary>
					</PageContainer>

					<PageContainer onChangeActivePage={onChangeActivePage} id='7'>
						<ErrorBoundary fallback={<Error />}>
							<Publications />
						</ErrorBoundary>
					</PageContainer>

					<Footer />
				</div>
			</TextContext.Provider>
		</>
	)
}

export default HomePage
