<script setup>
import { onMounted } from 'vue'
import { useStudySessionStore } from '@/stores/studySession'
import Topbar from '@/components/Topbar.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Card from '@/components/Card.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useStudySessionStore()
onMounted(() => {
  store.loadDeck() // docelowo: store.loadDeck(route.params.deckId)
})

async function handleAnswer(rating) {
  store.answer(rating)

  if (store.status === 'finished') {
    await finishStudy()
  }
}

async function finishStudy() {
  await store.saveResults() // zapis wyników (na razie mock, docelowo Supabase)
  router.push({ name: 'complete'})
}
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <header class="shrink-0">
            <Topbar/>
            <ProgressBar
                :current="store.progress"
                :total="20"
                class="shrink-0"
             />
        </header>
 
        <main class="flex-1 flex flex-col min-h-0">
 
            <Card 
                v-if="store.currentCard"
                class="flex-1 min-h-0"
                :key="store.currentCard.id"
                :front="store.currentCard.front"
                :back="store.currentCard.back"
            />
 
            <div class="flex gap-2 pt-5 pb-10 shrink-0">
                <button type="button" @click="handleAnswer('poor')" class="flex-1 py-2.5 rounded-card bg-poor text-white font-bold text-lg flex flex-col items-center justify-center gap-0.5">
                    <span>Poor</span>
                    <span class="text-sm font-semibold text-text">Didn't know it</span>
                </button>
 
                <!-- <button type="button" class="flex-1 py-2.5 rounded-card bg-close text-white font-bold text-base flex flex-col items-center justify-center gap-0.5">
                    <span>Close</span>
                    <span class="text-sm font-semibold text-text">Almost had it</span>
                </button> -->
 
                <button type="button" @click="handleAnswer('excellent')"  class="flex-1 py-2.5 rounded-card bg-excellent text-white font-bold text-base flex flex-col items-center justify-center gap-0.5">
                    <span>Excellent</span>
                    <span class="text-sm font-semibold text-text">Knew it well</span>
                </button>
 
            </div>
 
        </main>
    </div>
</template>
 