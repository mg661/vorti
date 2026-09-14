<script setup>
import Topbar from '@/components/Topbar.vue'
import { Check } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useStudySessionStore } from '@/stores/studySession'
const store = useStudySessionStore()
const router = useRouter()

const poorCount = 4
const masteredCount = 15
</script>

<template>
  <div class="flex flex-col h-dvh w-full max-w-md mx-auto bg-bg-app text-text font-sans">
    <header class="shrink-0">
      <Topbar />
    </header>

    <main class="flex-1 flex flex-col px-4 pb-6">
      <div class="flex-1 flex flex-col items-center justify-center gap-6">
        <!-- Badge -->
        <div class="w-16 h-16 rounded-card bg-blue-dim flex items-center justify-center">
          <Check class="w-8 h-8 text-blue" :stroke-width="2" />
        </div>

        <!-- Title -->
        <div class="font-heading font-extrabold text-2xl">Study complete!</div>

        <!-- Stats -->
        <div class="flex gap-2.5 w-full">
          <div class="flex-1 bg-surface border border-border rounded-card py-3 px-2 text-center">
            <div class="font-heading font-extrabold text-2xl text-poor">{{ store.poorCount }}</div>
            <div class="text-base text-text-muted font-semibold mt-0.5">Poor</div>
          </div>

          <div class="flex-1 bg-surface border border-border rounded-card py-3 px-2 text-center">
            <div class="font-heading font-extrabold text-2xl text-excellent">{{ store.masteredCount }}</div>
            <div class="text-base text-text-muted font-semibold mt-0.5">Mastered</div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="w-full flex flex-col gap-2.5">
        <button type="button" class="bg-blue font-bold py-3 rounded-card text-text">
          Study Again (All Cards)
        </button>

        <button
          type="button"
          class="bg-transparent font-bold py-3 border rounded-card border-border text-text"
        >
          Study Again (Unmastered Only)
        </button>

        <button type="button" class="bg-transparent font-bold py-3 rounded-card text-text-muted">
          Back to Set
        </button>
      </div>
    </main>
  </div>
</template>