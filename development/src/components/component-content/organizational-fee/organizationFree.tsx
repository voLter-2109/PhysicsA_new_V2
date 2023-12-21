import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { FC, useContext, useState } from 'react'
import { TextContext } from '../../../pages/home/home-page'
import ExternalLinks from '../../../ui/external-links/externalLinks'
import Heading from '../../../ui/heading/heading'
import formatterRU from '../../../utils/formatterRU'

const OrganizationFree: FC = () => {
	const [tabIndex, setTabIndex] = useState(0)
	const { OrganizationFree } = useContext(TextContext)
	console.log(OrganizationFree)
	return (
		<div className='[&>div]:mb-10'>
			<Heading>{OrganizationFree.head}</Heading>

			<div>
				<Heading className='text-xl'>{OrganizationFree.table.header}</Heading>
				<table className='w-full border-separate border-spacing-y-2  border-spacing-x-1 table-auto text-center '>
					<thead>
						<tr className='[&>th]:border-b [&>th]:border-b-bg-light-bu dark:[&>th]:border-bg-dark-bu'>
							{OrganizationFree.table.thead.map((item, i) => {
								return <th key={i}>{item}</th>
							})}
						</tr>
					</thead>
					<tbody className=''>
						{OrganizationFree.table.tbody.map((item, i) => {
							return (
								<tr key={i}>
									{item.map((item, i) => {
										if (!isNaN(Number(item))) {
											return <td key={i}> {formatterRU.format(+item)} </td>
										}

										return <td key={i}>{item}</td>
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<div className=''>
				<Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
					<Tab.List className='flex space-x-1 rounded-xl p-1 shadow-lg'>
						{dataPayment.map((data, idx) => (
							<Tab
								key={idx}
								className={({ selected }) =>
									cn(
										'w-full rounded-lg p-2.5 font-extrabold text-lg leading-5 text-bg-light ',
										selected
											? 'dark:bg-bd-dark dark:text-colors-dark-dark shadow bg-bg-light-bu text-colors-light-dark'
											: ' dark:hover:bg-bd-dark dark:hover:text-colors-dark-dark dark:bg-bd-dark/[0.42] dark:text-bg-dark-bu hover:bg-bg-light-bu bg-bg-light-bu/[0.7] text-colors-light-dark'
									)
								}
							>
								{data.title}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className='mt-2'>
						{dataPayment.map((data, idx) => (
							<Tab.Panel key={idx} className='shadow-lg '>
								<Transition
									appear
									show={tabIndex == idx}
									enter='transition-opacity duration-500'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-500'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div dangerouslySetInnerHTML={{ __html: data.body }} />
								</Transition>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>

			<ol className='list-disc'>
				{OrganizationFree.list.map((item, i) => {
					return (
						<li>
							{item.map((item, i) => {
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
								if (item.tag === 'strong') {
									return (
										<strong key={i}>
											{item.text}
											{item.enter && (
												<>
													<br />
													<br />
												</>
											)}
										</strong>
									)
								}

								if (item.tag === 'link') {
									return (
										<>
											<ExternalLinks
												key={i}
												//@ts-ignore
												linkText={item.typeLink}
												//@ts-ignore
												type={item.type}
												text={item.text}
											/>
											{item.enter && (
												<>
													<br />
													<br />
												</>
											)}
										</>
									)
								}
							})}
						</li>
					)
				})}
			
			</ol>
		</div>
	)
}

export default OrganizationFree

type TDataPayment = {
	title: string
	body: any[]
}

const dataPayment: TDataPayment[] = [
	{
		title: 'По договору с юридическим лицом.',
		body: [
			`<p>Для этого необходимо заполнить договор и согласовать его с вашей
			организацией и выслать в электронном виде на адрес
			<ExternalLinks type={'mailto'} linkText='physica.spb@inno-mir.com' />.<br />
			После того как договор будет заключен и подписан со стороны ООО
			«ИННО-МИР», Вам будет выставлен счет на оплату организационного взноса.<br />
			Оригиналы документов об оплате организационного взноса (счет, договор и
			акт выполненных работ) будут выдаваться на конференции при наличии
			доверенности на получение финансовых документов.
			</p>
			<br />
				В течение одного рабочего дня Вам на почту придет счет и ссылка на оплату.`
		]
	},
	{
		title: 'Банковским переводом физическим лицом.',
		body: [
			`
			<p>
			Для этого необходимо заполнить договор и выслать его в электронном виде
			на адрес
			<ExternalLinks type={'mailto'} linkText='physica.spb@inno-mir.com' />.
				Обращаем внимание, что в этом случае в качестве заказчика должно
				выступать физическое лицо. Для этого в шапке и реквизитах договора
				необходимо указать вашу 
				<blockquote>
				ФИО:<br/>
				паспортные данные:<br/>
				прописку:<br/>
				</blockquote>
			</p>
			<p>
				Оплата оргвзноса осуществляется банковским переводом по квитанции или
				банковской картой.
			</p>
			<br />
			<p>
				Для тех кто планирует возмещать расходы через свою организацию
				необходимо заполнить договор и выслать его в электронном виде на адрес
				<ExternalLinks type={'mailto'} linkText='physica.spb@inno-mir.com' />
				</p>
				<br />
				В течение одного рабочего дня Вам на почту придет счет и ссылка на оплату.
				`
		]
	},
	{
		title: 'Для оплаты банковской картой',
		body: [
			`Для оплаты банковской картой необходимо отправить письменный&nbsp;запрос на эл.адрес 
			<a  href="mailto:physica.spb@inno-mir.com">physica.spb@inno-mir.com</a>:
			<p>Хочу оплатить организационный взнос на Международную конференцию ФизикА.СПб банковской картой:<br>
			<blockquote>
				ФИО:<br/>
				Телефон:<br/>
				Электронная почта:&nbsp;<br/>
				Кол-во оргвзносов:&nbsp;&nbsp;</p>
				</blockquote>
				Во избежание недоразумений, обязательно укажите&nbsp;<strong>ЗА КОГО</strong> вы оплачиваете 
				согласно личным(ому) кабинетам(у) в системе <ExternalLinks type={'text'} linkText='https://physica.spb.ru/reg' />.
				<blockquote>То есть, если вы оплачиваете за Громоносова, Черных и Пантелеева, а сами вы Викниксор, 
				то без указания "за кого" мы не поймём назначение платежа, даже если вы фигурируете в соавторах.</blockquote>
				<br />
				В течение одного рабочего дня Вам на почту придет счет и ссылка на оплату.<br/><br/>
				<i>*При оплате банковской картой взимается комиссия 3%.<i/><br/>
				<i>*Квитанция и кассовый чек будут выдаваться при регистрации на конференции.</i>
				`
		]
	}
]
