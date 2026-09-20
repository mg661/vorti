<script setup>
import Topbar from '@/components/Topbar.vue'
import { CircleUserRound } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const isSigningOut = ref(false)

// --- zmiana hasła ---
const showPasswordForm = ref(false)
const newPassword = ref('')
const repeatPassword = ref('')
const isSaving = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

function openPasswordForm() {
  showPasswordForm.value = true
  successMsg.value = ''
}

function closePasswordForm() {
  showPasswordForm.value = false
  newPassword.value = ''
  repeatPassword.value = ''
  errorMsg.value = ''
}

async function handleChangePassword() {
  errorMsg.value = ''

  if (newPassword.value.length < 8) {
    errorMsg.value = 'Hasło musi mieć co najmniej 8 znaków.'
    return
  }
  if (newPassword.value !== repeatPassword.value) {
    errorMsg.value = 'Hasła nie są takie same.'
    return
  }

  isSaving.value = true
  try {
    await authStore.updatePassword(newPassword.value)
    closePasswordForm()
    successMsg.value = 'Hasło zostało zmienione.'
  } catch (err) {
    errorMsg.value = err.message
  } finally {
    isSaving.value = false
  }
}

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
    <div class="h-full flex flex-col overflow-hidden">
        <header class="shrink-0">
            <Topbar />
        </header>

        <main class="flex-1 min-h-0 flex flex-col">

            <div class="shrink-0 flex flex-col items-center text-center pt-3.5 pb-7">
                <CircleUserRound
                    class="size-22 text-blue mb-3.5"
                    :stroke-width="1.4"
                    aria-hidden="true"
                />

                <p class="text-sm font-semibold text-text-muted">
                       {{ authStore.user?.email }}
                </p>
            </div>

            <section class="shrink-0 flex gap-3">
                <div class="flex-1 bg-surface border border-border rounded-card p-4">
                    <div class="font-heading font-extrabold text-3xl leading-none text-excellent">
                        1<span class="ml-0.5 text-sm font-bold text-text-faint">/4</span>
                    </div>
                    <p class="mt-2 mb-3.5 text-xs font-semibold text-text-muted">
                        Mastered sets
                    </p>
                    <div class="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                        <div class="h-full w-1/4 rounded-full bg-excellent" />
                    </div>
                </div>

                <div class="flex-1 bg-surface border border-border rounded-card p-4">
                    <div class="font-heading font-extrabold text-3xl leading-none text-excellent">
                        43<span class="ml-0.5 text-sm font-bold text-text-faint">/78</span>
                    </div>
                    <p class="mt-2 mb-3.5 text-xs font-semibold text-text-muted">
                        Mastered cards
                    </p>
                    <div class="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                        <div class="h-full w-[55%] rounded-full bg-excellent" />
                    </div>
                </div>
            </section>

<div class="mt-auto shrink-0 flex flex-col gap-3 pb-6">

    <p v-if="successMsg" class="text-sm text-center font-semibold text-excellent">
        {{ successMsg }}
    </p>

    <!-- formularz zmiany hasła -->
    <form
        v-if="showPasswordForm"
        class="flex flex-col gap-3"
        @submit.prevent="handleChangePassword"
    >
        <input
            v-model="newPassword"
            type="password"
            autocomplete="new-password"
            placeholder="New password"
            required
            class="bg-surface border border-border rounded-card px-4 py-3 text-text placeholder:text-text-faint outline-none focus:border-blue"
        />
        <input
            v-model="repeatPassword"
            type="password"
            autocomplete="new-password"
            placeholder="Repeat new password"
            required
            class="bg-surface border border-border rounded-card px-4 py-3 text-text placeholder:text-text-faint outline-none focus:border-blue"
        />

        <p v-if="errorMsg" class="text-xs font-semibold text-poor">
            {{ errorMsg }}
        </p>

        <button
            type="submit"
            :disabled="isSaving"
            class="bg-blue text-white font-bold py-3 rounded-card disabled:opacity-50"
        >
            {{ isSaving ? 'Zapisywanie...' : 'Confirm' }}
        </button>
        <button
            type="button"
            class="bg-transparent font-bold py-3 text-text-muted"
            @click="closePasswordForm"
        >
            Cancel
        </button>
    </form>

    <!-- domyślne przyciski -->
    <template v-else>
        <button
            type="button"
            class="bg-transparent font-bold py-3 border rounded-card border-border text-text"
            @click="openPasswordForm"
        >
            Change Password
        </button>

        <button
            type="button"
            class="bg-transparent font-bold py-3 border rounded-card border-poor/35 text-poor"
            :disabled="isSigningOut"
            @click="handleSignOut"
        >
            Log Out
        </button>
    </template>
</div>

        </main>
    </div>
</template>