import { Tab, Transition } from '@headlessui/react'
import cn from 'clsx'
import { FC, useState } from 'react'
import ExternalLinks from '../../../ui/external-links/externalLinks'
import Heading from '../../../ui/heading/heading'
import formatterRU from '../../../utils/formatterRU'

const OrganizationFree: FC = () => {
	const [tabIndex, setTabIndex] = useState(0)
	return (
		<div className='[&>div]:mb-10'>
			<Heading>Организационный взнос</Heading>

			<div>
				<Heading className='text-xl'>Стоимость участия:</Heading>
				<table className='w-full border-separate border-spacing-y-2  border-spacing-x-1 table-auto text-center '>
					<thead>
						<tr className='[&>th]:border-b [&>th]:border-b-bg-light-bu dark:[&>th]:border-bg-dark-bu'>
							<th></th>
							<th>до 2 сентября</th>
							<th>до 18 октября</th>
							<th>после 18 октября </th>
						</tr>
					</thead>
					<tbody className=''>
						<tr className=''>
							<td>Размер оргвзноса </td>
							<td>{formatterRU.format(10000)}</td>
							<td>{formatterRU.format(13000)}</td>
							<td>{formatterRU.format(15000)}</td>
						</tr>
						<tr>
							<td>Оплата банковской картой </td>
							<td>{formatterRU.format(10500)}</td>
							<td>{formatterRU.format(13650)}</td>
							<td>{formatterRU.format(15750)}</td>
						</tr>
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
				<li>
					Оплата организационного взноса за участие в конференции осуществляется
					по безналичному расчету через Общество с ограниченной ответственностью
					«Центр межрегионального инновационного развития» (ООО «ИННО-МИР»)
				</li>
				<li>
					Все платежи обрабатываются в течение 5 рабочих дней. То есть статус
					платежа в ЛК обновляется в течение 5 дней. Не присылайте нам квитанции
					о платежах. Оргкомитет их проверить не может. Пожалуйста, задавайте
					вопросы о ваших платежах компании{' '}
					<ExternalLinks type={'mailto'} linkText='physica.spb@inno-mir.com' />
				</li>
				<li>
					<strong>
						По всем вопросам, возникшим с заполнением документов, оплатой
						организационного взноса и другими финансовыми вопросами, пожалуйста,
						обращайтесь к Землянской Ирине по электронной почте
						<ExternalLinks
							type={'mailto'}
							linkText='physica.spb@inno-mir.com'
						/>
						, или по телефону{' '}
						<ExternalLinks type={'tel'} linkText='+7 (911) 840-53-48' /> (с
						12.00 до 17.00 – время Московское).
					</strong>
				</li>
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
