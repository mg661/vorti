<script setup>
import { useRouter } from 'vue-router'
import { PawPrint } from 'lucide-vue-next'
const router = useRouter()
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <main class="flex-1 flex flex-col items-center justify-center px-4 text-center gap-6">
            <div class="w-14 h-14 rounded-card bg-gradient-to-br from-blue to-[#1E3E8F] flex items-center justify-center">
                <PawPrint class="w-6 h-6 text-white" :stroke-width="2" />
            </div>

            <div class="flex flex-col items-center gap-1.5">
                <div class="font-heading font-bold text-3xl">Vorti</div>
                <p class="text-text-muted text-base">Sign in to continue your learning streak.</p>
            </div>

            <div class="flex flex-col gap-3.5 w-full text-left">
                <div class="flex flex-col gap-1.5">
                    <label class="text-text-muted text-base font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="you@email.com"
                        class="h-12 rounded-card bg-surface border border-border px-4 text-base text-text placeholder:text-text-faint focus:outline-none focus:border-blue"
                    >
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-text-muted text-base font-bold">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        class="h-12 rounded-card bg-surface border border-border px-4 text-base text-text placeholder:text-text-faint focus:outline-none focus:border-blue"
                    >
                </div>

                <div class="flex justify-end">
                    <button type="button" class="text-blue text-sm font-bold">
                        Forgot password?
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-3 w-full">
                <button type="button" class="bg-blue font-bold py-3 rounded-card text-text" @click="router.push({ name: 'start' })">
                    Sign In
                </button>

                <div class="text-text-muted text-sm">
                    Don't have an account?
                    <span class="text-blue font-bold">Sign Up</span>
                </div>
            </div>
        </main>
    </div>
</template>