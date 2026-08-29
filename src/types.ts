export type Language = 'ru' | 'en'
export type QuestionCategory = 'parents' | 'friends' | 'self'
export type Category = 'all' | QuestionCategory
export type Tab = 'home' | 'categories'
export type NavigationItem = 'home' | 'refresh' | 'categories'

export type LocalizedText = {
  ru: string
  en: string
}

export type Question = {
  id: number
  text: LocalizedText
  category: QuestionCategory[]
  followUps: LocalizedText[]
}
