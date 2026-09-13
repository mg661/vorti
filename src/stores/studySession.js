// stores/studySession.js
import { defineStore } from 'pinia'
import { MOCK_CARDS } from '@/data/mockCards'

export const useStudySessionStore = defineStore('studySession', {
  state: () => ({
    cards: [],
    currentIndex: 0,
    results: [],      // { cardId, rating }
    status: 'idle',   // idle | loading | ready | finished | error
  }),

  getters: {
    currentCard: (state) => state.cards[state.currentIndex] ?? null,
    total: (state) => state.cards.length,
    progress: (state) => state.currentIndex,
    isFinished: (state) => state.status === 'finished',
  },

  actions: {
    async loadDeck(deckId) {
      this.status = 'loading'
      try {
        // docelowo: const { data } = await supabase.from('cards').select('*').eq('deck_id', deckId)
        this.cards = MOCK_CARDS
        this.currentIndex = 0
        this.results = []
        this.status = 'ready'
      } catch (e) {
        this.status = 'error'
      }
    },

    answer(rating) {
      const card = this.currentCard
      if (!card) return
      this.results.push({ cardId: card.id, rating })
      this.currentIndex++
      if (this.currentIndex >= this.cards.length) {
        this.status = 'finished'
      }
    },
  },
})