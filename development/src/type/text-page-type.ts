type Messages = typeof import('../messages/ru.json')

export  interface IAllText extends Messages {}

export type TLandingPage = Pick<IAllText, "landingPage">

export type TPersonalAreaPage = Pick<IAllText, "personalAreaPage">
