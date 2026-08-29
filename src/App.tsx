import { useState } from 'react'
import './App.css'
import { questions } from './questions'
import { categoryLabels, uiLabels } from './labels'

import type { Category, Language, Tab } from './types'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language')

    return savedLanguage === 'en' || savedLanguage === 'ru' ? savedLanguage : 'ru'
  })
  const [activeTab, setActiveTab] = useState<Tab>('home')
  const [selectedCategory, setSelectedCategory] = useState<Category>(() => {
    const savedCategory = localStorage.getItem('category')

    return savedCategory === 'all'
      || savedCategory === 'parents'
      || savedCategory === 'friends'
      || savedCategory === 'self'
      ? savedCategory
      : 'all'
  })

  const selectedCategoryLabel = selectedCategory === 'all'
    ? null
    : categoryLabels[language][selectedCategory]

  const filteredQuestions = selectedCategory === 'all'
    ? questions
    : questions.filter((question) => question.category.includes(selectedCategory))

  const currentQuestion = filteredQuestions[currentQuestionIndex]

  function handleRefresh() {
    if (filteredQuestions.length <= 1) {
      return
    }
    let nextQuestionIndex = Math.floor(Math.random() * filteredQuestions.length)

    while (nextQuestionIndex === currentQuestionIndex) {
      nextQuestionIndex = Math.floor(Math.random() * filteredQuestions.length)
    }

    setCurrentQuestionIndex(nextQuestionIndex)
  }

  function handleLanguageChange() {
    const nextLanguage = language === 'ru' ? 'en' : 'ru'

    setLanguage(nextLanguage)
    localStorage.setItem('language', nextLanguage)
  }

  function handleCategoryChange(category: Category) {
    setSelectedCategory(category)
    localStorage.setItem('category', category)
    setCurrentQuestionIndex(0)
    setActiveTab('home')
  }

  return (
    <main className="App">
      <button
          className="language-button"
          type="button"
          onClick={handleLanguageChange}
          aria-label={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
        >
          🌐
      </button>

      {activeTab === 'home' ? (
        <section className="question-card">
          {selectedCategoryLabel && (
            <p className="category-label">
              {selectedCategoryLabel}
            </p>
          )}

          <h2 className="main-question">{currentQuestion.text[language]}</h2>
          <ul className="follow-up-list">
            {currentQuestion.followUps.map((followUp) => (
              <li key={followUp[language]}>
                {followUp[language]}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="categories-panel">
          <button type="button" onClick={() => handleCategoryChange('all')}>
            {categoryLabels[language].allTopics}
          </button>
          <button type="button" onClick={() => handleCategoryChange('parents')}>
            {categoryLabels[language].parents}
          </button>
          <button type="button" onClick={() => handleCategoryChange('friends')}>
            {categoryLabels[language].friends}
          </button>
          <button type="button" onClick={() => handleCategoryChange('self')}>
            {categoryLabels[language].self}
          </button>
        </section>
      )}

      <nav className="bottom-nav" aria-label="Основная навигация">
          <button
            type="button"
            className={`nav-button ${activeTab === 'home' ? 'nav-button-active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            {uiLabels[language].home}
          </button>
          <button
            type="button"
            className="nav-button refresh-nav-button"
            onClick={handleRefresh}
            disabled={activeTab !== 'home'}
          >
            {uiLabels[language].refresh}
          </button>
          <button
            type="button"
            className={`nav-button ${activeTab === 'categories' ? 'nav-button-active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            {uiLabels[language].categories}
          </button>
      </nav>
    </main>
  )
}

export default App
