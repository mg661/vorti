import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    session: null,
    loading: true,      // true dopóki nie sprawdzimy sesji przy starcie
    initialized: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.session,
  },

  actions: {
    async initAuth() {
      const { data } = await supabase.auth.getSession()
      this.session = data.session
      this.user = data.session?.user ?? null
      this.loading = false
      this.initialized = true

      supabase.auth.onAuthStateChange((_event, session) => {
        this.session = session
        this.user = session?.user ?? null
      })
    },

    async signUp(email, password) {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      return data
    },

    async signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

            if (error) throw error

            console.log("USER:", data.user)
            console.log("SESSION:", data.session)

            return data
    },

    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },

    async updatePassword(newPassword) {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) {
        throw new Error(error.message)
      }

      this.user = data.user
      return true
    },
  },
})