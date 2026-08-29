import { useState } from 'react'
import './App.css'
import { questions } from './questions'

const categoryLabels = {
  ru: {
    parents: 'С родителями',
    friends: 'С друзьями',
    self: 'Самоанализ',
  },
  en: {
    parents: 'With parents',
    friends: 'With friends',
    self: 'Self-reflection',
  }
}

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [language, setLanguage] = useState<'ru' | 'en'>('ru')
  const [activeTab, setActiveTab] = useState<'home' | 'categories'>('home')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'parents' | 'friends' | 'self'>('all')

  const selectedCategoryLabel = selectedCategory === 'all'
    ? null
    : categoryLabels[language][selectedCategory]

  const filteredQuestions = selectedCategory === 'all'
    ? questions
    : questions.filter((question) => question.category.includes(selectedCategory))

  const currentQuestion = filteredQuestions[currentQuestionIndex]

  function handleRefresh() {
    let nextQuestionIndex = Math.floor(Math.random() * filteredQuestions.length)

    while (nextQuestionIndex === currentQuestionIndex) {
      nextQuestionIndex = Math.floor(Math.random() * filteredQuestions.length)
    }

    setCurrentQuestionIndex(nextQuestionIndex)
  }

  function handleLanguageChange() {
    setLanguage(language === 'ru' ? 'en' : 'ru')
  }

  function handleCategoryChange(category: 'all' | 'parents' | 'friends' | 'self') {
    setSelectedCategory(category)
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
            Все темы
          </button>
          <button type="button" onClick={() => handleCategoryChange('parents')}>
            С родителями
          </button>
          <button type="button" onClick={() => handleCategoryChange('friends')}>
            С друзьями
          </button>
          <button type="button" onClick={() => handleCategoryChange('self')}>
            Самоанализ
          </button>
        </section>
      )}

      <nav className="bottom-nav" aria-label="Основная навигация">
          <button
            type="button"
            className={`nav-button ${activeTab === 'home' ? 'nav-button-active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Главная
          </button>
          <button
            type="button"
            className="nav-button refresh-nav-button"
            onClick={handleRefresh}
            disabled={activeTab !== 'home'}
          >
            Обновить
          </button>
          <button
            type="button"
            className={`nav-button ${activeTab === 'categories' ? 'nav-button-active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            Категории
          </button>
      </nav>
    </main>
  )
}

export default App
