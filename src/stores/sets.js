import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

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
    const { data, error } = await supabase.rpc('get_sets_with_progress')
    if (error) throw error

    this.sets = data.map(set => ({
      id: set.id,
      title: set.title,
      description: set.description,
      category: set.category,
      totalCards: set.total_cards,
      masteredCards: set.mastered_cards,
      mastered: set.mastered
    }))

    this.status = 'ready'
  } catch (e) {
    console.error(e)
    this.status = 'error'
  }
},
  },
})