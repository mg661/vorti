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

    poorCount: (state) => state.results.filter(r => r.rating === 'poor').length,
    masteredCount: (state) => state.results.filter(r => r.rating === 'excellent').length,
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

    async saveResults() {
      // docelowo: await supabase.from('study_results').insert(this.results)
      // albo: await supabase.rpc('save_session_results', { results: this.results })
      console.log('Saving results (mock):', this.results)
    },

  },
})