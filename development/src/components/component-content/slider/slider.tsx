'use client'

import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon
} from '@heroicons/react/20/solid'
import { useContext, useRef, useState } from 'react'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '../../../hooks/useResize'
import { TextContext } from '../../../pages/home/home-page'
import Heading from '../../../ui/heading/heading'
import './style.scss'

const arrFoto = [
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0646.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0647.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0648.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0649.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0650.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0651.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0652.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0656.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0657.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0658.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0659.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0660.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0664.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0665.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0666.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0667.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0670.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0671.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0672.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0673.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0674.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0675.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0676.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0677.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0678.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0679.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0680.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0681.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0683.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0685.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0686.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0689.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0691.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0692.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0693.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0696.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0697.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0698.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0699.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0701.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0703.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0704.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0709.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0707.jpg',
	'https://physica.spb.ru/data/uploads/2023photos/20231023-IMG_0708.jpg'
]

export default function SwiperComponent() {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
	const swiperRef = useRef<any>(null)
	const { isScreenSm, isScreenLg } = useWindowSize()
	const { SwiperComponent } = useContext(TextContext)

	return (
		<div className='flex flex-col gap-2 '>
			<Heading>{SwiperComponent.head}</Heading>
			<Swiper
				loop={true}
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Thumbs, Autoplay]}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				style={{
					position: 'relative'
				}}
				className='mySwiper2 '
			>
				<button
					className='absolute top-0 left-0 z-10 h-full p-3 dark:hover:bg-colors-dakr-light/20 hover:bg-bg-black/10'
					onClick={() => {
						swiperRef.current.slidePrev()
					}}
				>
					<ChevronDoubleLeftIcon
						width={35}
						height={35}
						className='dark:fill-bg-dark-bu fill-bg-light-bu '
					/>
				</button>
				<button
					className='absolute top-0 h-full right-0 z-10 p-3 dark:hover:bg-colors-dakr-light/20 hover:bg-bg-black/10'
					onClick={() => {
						swiperRef.current.slideNext()
					}}
				>
					<ChevronDoubleRightIcon
						width={35}
						height={35}
						className='dark:fill-bg-dark-bu fill-bg-light-bu'
					/>
				</button>

				<div>
					{arrFoto.map((slide, i) => (
						<SwiperSlide key={i} className='rounded-sm'>
							<img src={slide} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={isScreenLg ? 10 : 5}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Navigation, Thumbs]}
				className='mySwiper'
			>
				{arrFoto.map((slide, i) => (
					<SwiperSlide key={i}>
						<img src={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const SwiperButton = () => {}
