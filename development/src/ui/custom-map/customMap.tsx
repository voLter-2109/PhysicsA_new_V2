import { useYMaps } from '@pbe/react-yandex-maps'
import { useEffect, useRef } from 'react'
import { TMap } from '../../type/text-page-type'

const CustomMap = ({ initialMap }: { initialMap: TMap }) => {
	const mapRef = useRef(null)
	const ymaps = useYMaps(['Map'])

	useEffect(() => {
		if (!ymaps || !mapRef.current) {
			return
		}

		const myMap = new ymaps.Map(mapRef.current, {
			center: [60.006395, 30.365195],
			zoom: 14,
			controls: ['fullscreenControl', 'zoomControl']
			//  controls: ['fullscreenControl']
		})

		myMap.geoObjects.add(
			new ymaps.Placemark(
				[60.00539816057044, 30.354064792088852],
				{
					balloonContentHeader: 'Гостиница Спутник',
					balloonContentBody:
						'Санкт-Петербург, гостиница «Спутник» пр. Тореза, 36, Санкт-Петербург, 194021'
				},
				{
					preset: 'islands#icon',
					iconColor: '#0095b6'
				}
			)
		)
	}, [ymaps])

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '540px',
				borderRadius: '10px',
				overflow: 'hidden'
			}}
		/>
	)
}

export default CustomMap
