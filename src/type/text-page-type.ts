type Messages = typeof import('../messages/ru.json')

export interface IAllText extends Messages {}

export type TLandingPage = IAllText['landingPage']
//?
export type TMap = TLandingPage["LocationSection"]["bTabs"][0]["map"]
export type TNavBarText = TLandingPage['NavBarText']
export type TAboutUs = TLandingPage['AboutUs']
export type TFooter = TLandingPage['Footer']
export type THomeText = TLandingPage['HomeText']
export type TLocationSection = TLandingPage['LocationSection']
export type TOrganizationFree = TLandingPage['OrganizationFree']
export type TProgramOfPerfomances = TLandingPage['ProgramOfPerfomances']
export type TPublications = TLandingPage['Publications']
export type TSwiperComponent = TLandingPage['SwiperComponent']

export type TPersonalAreaPage = Pick<IAllText, 'personalAreaPage'>
