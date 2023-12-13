'use client'

import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import PageContainer from '../../ui/page-container/page-container'

import { YMaps } from '@pbe/react-yandex-maps'
import dynamic from 'next/dynamic'
import AboutUs from '../../components/component-content/about-us/aboutUs'
import HomeText from '../../components/component-content/home-paralax/homeText'
import Publications from '../../components/component-content/publications/publications'
import Error from '../../components/error/error'
import Footer from '../../components/footer/footer'
import Header from '../../components/nav-bar-header/header'

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

const HomePage = () => {
	const [activePage, setActivePage] = useState<number>(1)

	const onChangeActivePage = (
		inView: boolean,
		entry: IntersectionObserverEntry,
		id: number
	) => {
		// if (entry.target.firstElementChild && entry.target) {
		// 	const targetId = entry.target.firstElementChild.getAttribute('id')
		// 	if (targetId && inView) setActivePage(+targetId)
		// }
		console.log('id:' + id + 'inView:' + inView)
		if (id && inView) setActivePage(+id)
	}

	return (
		<>
			<div className='flex flex-col'>
				<Header activePage={activePage} />

				<PageContainer
					onChangeActivePage={onChangeActivePage}
					id='1'
					container={false}
					className="h-[100vh] flex relative shadow-2xl justify-end dark:bg-[url('/bg-par-black.jpg')] bg-[url('/bg-par-light.jpg')]"
					style={{
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}
				>
					<ErrorBoundary fallback={<Error />}>
						<HomeText />
					</ErrorBoundary>
				</PageContainer>

				<PageContainer onChangeActivePage={onChangeActivePage} id='2'>
					<ErrorBoundary fallback={<Error />}>
						<AboutUs />
					</ErrorBoundary>
				</PageContainer>

				<PageContainer onChangeActivePage={onChangeActivePage} id='3'>
					<ErrorBoundary fallback={<Error />}>
						<DynamicProgramOfPerfomances />
					</ErrorBoundary>
				</PageContainer>

				<PageContainer onChangeActivePage={onChangeActivePage} id='4'>
					<ErrorBoundary fallback={<Error />}>
						<DynamicSwiperComponent />
					</ErrorBoundary>
				</PageContainer>

				<PageContainer
					className='min-h-[80vh]'
					onChangeActivePage={onChangeActivePage}
					id='5'
				>
					<ErrorBoundary fallback={<Error />}>
						<YMaps
							query={{
								apikey: process.env.YANDEX_API_KEY,
								lang: 'ru_RU',
								ns: 'use-load-option',
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
		</>
	)
}

export default HomePage
