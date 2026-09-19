<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { PawPrint } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const isSubmitting = ref(false)

async function handleSignIn() {
  errorMsg.value = ''
  isSubmitting.value = true
  try {
    await authStore.signIn(email.value, password.value)
    router.push({ name: 'start' })
  } catch (err) {
    errorMsg.value = err.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
    <div class="flex flex-col h-full">
        <main class="flex-1 flex flex-col items-center justify-center px-4 text-center gap-6">
            <div class="w-14 h-14 rounded-card bg-linear-to-br from-blue to-[#1E3E8F] flex items-center justify-center">
                <PawPrint class="w-6 h-6 text-white" :stroke-width="2" />
            </div>

            <div class="flex flex-col items-center gap-1.5">
                <div class="font-heading font-bold text-3xl">Vorti</div>
                <p class="text-text-muted text-base">Sign in to continue your learning streak.</p>
            </div>

            <form class="flex flex-col gap-3.5 w-full text-left" @submit.prevent="handleSignIn">
                <div class="flex flex-col gap-1.5">
                    <label class="text-text-muted text-base font-bold">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        placeholder="you@email.com"
                        autocomplete="email"
                        required
                        class="h-12 rounded-card bg-surface border border-border px-4 text-base text-text placeholder:text-text-faint focus:outline-none focus:border-blue"
                    >
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-text-muted text-base font-bold">Password</label>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="••••••••"
                        autocomplete="current-password"
                        required
                        class="h-12 rounded-card bg-surface border border-border px-4 text-base text-text placeholder:text-text-faint focus:outline-none focus:border-blue"
                    >
                </div>

                <div class="flex justify-end">
                    <button type="button" class="text-blue text-sm font-bold">
                        Forgot password?
                    </button>
                </div>

                <p v-if="errorMsg" class="text-red-500 text-sm">{{ errorMsg }}</p>

                <div class="flex flex-col gap-3 w-full">
                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="bg-blue font-bold py-3 rounded-card text-text disabled:opacity-60"
                    >
                        {{ isSubmitting ? 'Signing in...' : 'Sign In' }}
                    </button>

                    <div class="text-text-muted text-sm text-center">
                        Don't have an account?
                        <span class="text-blue font-bold">Sign Up</span>
                    </div>
                </div>
            </form>
        </main>
    </div>
</template>