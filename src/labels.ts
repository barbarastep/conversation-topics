import type { Category, Language, NavigationItem } from './types'

export const categoryOptions: Category[] = ['all', 'parents', 'friends', 'self']

export const categoryLabels: Record<Language, Record<Category, string>> = {
  ru: {
    all: 'Все темы',
    parents: 'С родителями',
    friends: 'С друзьями',
    self: 'Самоанализ',
  },
  en: {
    all: 'All topics',
    parents: 'With parents',
    friends: 'With friends',
    self: 'Self-reflection',
  }
}

export const navigationLabels: Record<Language, Record<NavigationItem, string>> = {
  ru: {
    home: 'Главная',
    refresh: 'Обновить',
    categories: 'Категории',
  },
  en: {
    home: 'Home',
    refresh: 'Refresh',
    categories: 'Categories',
  }
}
