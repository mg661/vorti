<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Home, User } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isSigningOut = ref(false)

async function handleSignOut() {
  isSigningOut.value = true
  try {
    await authStore.signOut()
    router.push({ name: 'signin' })
  } catch (err) {
    console.error(err.message)
  } finally {
    isSigningOut.value = false
  }
}
</script>

<template>
    <div class="flex justify-between pb-2">
        <router-link
        :to="{name: 'start'}"
        class="w-12 h-12 rounded-card bg-surface border border-border flex items-center justify-center">
            <Home class="w-6 h-6 text-text"/>
        </router-link>

         <router-link
        :to="{name: 'profile'}"
        class="w-12 h-12 rounded-card  bg-blue border border-border flex items-center justify-center">
            <User class="w-6 h-6 text-text"/>
        </router-link>

    </div>
</template>