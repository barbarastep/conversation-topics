import type { Question } from './types'

export const questions: Question[] = [
  {
    id: 1,
    text: {
      ru: 'Можно ли по-настоящему остаться просто друзьями с человеком, с которым раньше были романтические отношения?',
      en: 'Can you truly stay just friends with someone you used to have a romantic relationship with?'
    },
    category: ['parents'],
    followUps: [
      {
        ru: 'От чего зависит, получится ли после отношений перейти к обычной дружбе?',
        en: 'What does it depend on whether people can become just friends after a relationship?'
      },
      {
        ru: 'Какие границы нужны, чтобы такая дружба могла нормально существовать?',
        en: 'What boundaries are needed for this kind of friendship to work well?'
      }
    ]
  },
  {
    id: 2,
    text: {
      ru: 'Должны ли партнёры полностью знать всё о финансах друг друга, или какая-то финансовая приватность — это нормально?',
      en: 'Should partners know everything about each other\'s finances, or is some financial privacy normal?'
    },
    category: ['parents'],
    followUps: [
      {
        ru: 'На каком этапе отношений становится важно полностью открыто говорить о деньгах?',
        en: 'At what stage of a relationship does it become important to talk openly about money?'
      },
      {
        ru: 'Какие плюсы и минусы могут быть у полной финансовой прозрачности?',
        en: 'What are the pros and cons of complete financial transparency?'
      }
    ]
  },
  {
    id: 3,
    text: {
      ru: 'Какую самую необычную еду ты пробовала в путешествии?',
      en: 'What is the most unusual food you have tried while travelling?'
    },
    category: ['friends'],
    followUps: [
      {
        ru: 'Было ли это тем, что ты сначала вообще не хотела пробовать?',
        en: 'Was it something you did not want to try at first?'
      },
      {
        ru: 'В итоге она оказалась лучше или хуже, чем ты ожидала?',
        en: 'Did it turn out to be better or worse than you expected?'
      }
    ]
  },
  {
    id: 4,
    text: {
      ru: 'В какой вымышленной вселенной ты бы хотела пожить?',
      en: 'Which fictional universe would you like to live in?'
    },
    category: ['friends'],
    followUps: [
      {
        ru: 'Как бы выглядел твой обычный день в этом мире?',
        en: 'What would your typical day look like in that world?'
      },
      {
        ru: 'С кем из персонажей ты бы хотела подружиться, а кого стала бы избегать?',
        en: 'Which characters would you like to be friends with, and who would you avoid?'
      }
    ]
  },
  {
    id: 5,
    text: {
      ru: 'Нравится ли мне тот человек, которым я стала?',
      en: 'Do I like the person I have become?'
    },
    category: ['self'],
    followUps: [
      {
        ru: 'Какие свои качества я сейчас ценю больше всего?',
        en: 'Which of my qualities do I value most now?'
      },
      {
        ru: 'Что в себе я хотела бы изменить — и почему до сих пор этого не сделала?',
        en: 'What would I like to change about myself, and why have I not done it yet?'
      }
    ]
  },
  {
    id: 6,
    text: {
      ru: 'Какие у меня вредные привычки?',
      en: 'What bad habits do I have?'
    },
    category: ['self'],
    followUps: [
      {
        ru: 'Какие из них действительно мешают мне жить, а какие я просто считаю неправильными?',
        en: 'Which of them actually make my life worse, and which ones do I simply think are bad?'
      },
      {
        ru: 'Что я получаю от этих привычек — комфорт, отвлечение, чувство контроля или удовольствие?',
        en: 'What do I get from these habits — comfort, distraction, a sense of control, or pleasure?'
      }
    ]
  }
]
