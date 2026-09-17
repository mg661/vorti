import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [],
    status: 'idle', // idle | loading | ready | error
  }),

  actions: {
    async loadCardsForSet(setId) {
      this.status = 'loading'
      try {
        const { data, error } = await supabase.rpc('get_cards_for_set', {
          p_set_id: Number(setId),
        })
        if (error) throw error

        this.cards = data
        this.status = 'ready'
      } catch (e) {
        console.error(e)
        this.status = 'error'
      }
    },
  },
})