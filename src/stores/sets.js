import { defineStore } from 'pinia'
import { MOCK_SETS } from '@/data/mockSets'

export const useSetsStore = defineStore('sets', {
  state: () => ({
    sets: [],
    status: 'idle', // idle | loading | ready | error
  }),

  getters: {
    masteredSets: (state) => state.sets.filter(s => s.masteredCards === s.totalCards),
    notMasteredSets: (state) => state.sets.filter(s => s.masteredCards < s.totalCards),
  },

  actions: {
    async loadSets() {
      this.status = 'loading'
      try {
        // docelowo: const { data } = await supabase.from('sets').select('*')
        this.sets = MOCK_SETS
        this.status = 'ready'
      } catch (e) {
        this.status = 'error'
      }
    },
  },
})