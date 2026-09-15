import { defineStore } from 'pinia'
import { MOCK_CARDS } from '@/data/mockCards'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [],
    status: 'idle', // idle | loading | ready | error
  }),

  actions: {
    async loadCardsForSet(setId) {
      this.status = 'loading'
      try {
        // docelowo: const { data } = await supabase.from('cards').select('*').eq('set_id', setId)
        this.cards = MOCK_CARDS.filter(c => c.set_id === Number(setId))
        this.status = 'ready'
      } catch (e) {
        this.status = 'error'
      }
    },
  },
})