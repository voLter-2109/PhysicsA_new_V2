'use client'

import { FC, createContext, useCallback, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import PageContainer from '../../ui/page-container/page-container'

import { YMaps } from '@pbe/react-yandex-maps'
import Loading from '[locale]/loading'
import dynamic from 'next/dynamic'
import AboutUs from '../../components/component-content/about-us/aboutUs'
import Footer from '../../components/component-content/footer/footer'
import HomeText from '../../components/component-content/home-paralax/homeText'
import Header from '../../components/component-content/nav-bar-header/header'
import Publications from '../../components/component-content/publications/publications'
import Error from '../../components/error/error'
import { TLandingPage } from '../../type/text-page-type'

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

	if (!landingPage) return <Loading />

	return (
		<>
			<TextContext.Provider value={landingPage}>
				<div className='flex flex-col overflow-hidden'>
					<Header activePage={activePage} />
					{/* //!база и компоненты готовы */}
					<PageContainer
						onChangeActivePage={onChangeActivePage}
						id='1'
						// dark:bg-[url('/bg-par-black.jpg')] bg-[url('/bg-par-light.jpg')]
						container={false}
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

					<PageContainer onChangeActivePage={onChangeActivePage} id='5'>
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
