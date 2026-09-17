// stores/studySession.js
import { defineStore } from 'pinia'
import { MOCK_CARDS } from '@/data/mockCards'
import { supabase } from '@/utils/supabase'

export const useStudySessionStore = defineStore('studySession', {
  state: () => ({
    cards: [],
    currentIndex: 0,
    currentSetId: null,
    currentFilter: null,
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
    async loadDeck(deckId, filter) {
      this.status = 'loading'
      try {
        this.currentSetId = Number(deckId)
        this.currentFilter = filter ?? null

        // docelowo: const { data } = await supabase.from('cards').select('*').eq('deck_id', deckId)
        this.cards = MOCK_CARDS.filter(c => {
          if (c.set_id !== Number(deckId)) return false
          return filter !== 'unmemorized' || !c.mastered
        })
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
      if (this.results.length === 0) return

      const { error } = await supabase.rpc('save_session_results', {
        results: this.results.map(r => ({
          cardId: r.cardId,
          rating: r.rating,
        })),
      })

      if (error) {
        console.error('Nie udało się zapisać wyników:', error)
        throw error
      }
    },

  },
})