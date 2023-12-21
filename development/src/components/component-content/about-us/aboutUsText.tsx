import { TAboutUs } from '../../../type/text-page-type'
import ExternalLinks from '../../../ui/external-links/externalLinks'

const AboutUsText = ({ aboutUsText }: { aboutUsText: TAboutUs['text'] }) => {
	return (
		<>
			{aboutUsText.map((item, i) => {
				if (item.tag === 'span') {
					return (
						<span key={i}>
							{item.text}
							{item.enter && (
								<>
									<br />
									<br />
								</>
							)}
						</span>
					)
				}

				if (item.tag === 'link') {
					return (
						<ExternalLinks
							key={i}
							//@ts-ignore
							linkText={item.typeLink}
							//@ts-ignore
							type={item.type}
							text={item.text}
						/>
					)
				}
			})}
		</>
	)
}

export default AboutUsText
