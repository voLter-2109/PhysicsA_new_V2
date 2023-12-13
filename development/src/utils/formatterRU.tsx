const formatterRU = new Intl.NumberFormat('ru-RU', {
	minimumFractionDigits: 0,
	style: 'currency',
	currency: 'RUB'
})

export default formatterRU
