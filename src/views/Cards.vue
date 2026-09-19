<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Topbar from '@/components/Topbar.vue'
import CardMin from '@/components/CardMin.vue'
import { useCardsStore } from '@/stores/cards'
import { useSetsStore } from '@/stores/sets'

const router = useRouter()
const route = useRoute()
const cardsStore = useCardsStore()
const setsStore = useSetsStore()

onMounted(() => {
  cardsStore.loadCardsForSet(route.params.setId)
  // jeśli setsStore.sets jest jeszcze pusty (np. wejście bezpośrednio pod URL Cards.vue)
  if (setsStore.sets.length === 0) {
    setsStore.loadSets()
  }
})

// gdyby user nawigował między zestawami bez przeładowania komponentu
watch(() => route.params.setId, (newSetId) => {
  cardsStore.loadCardsForSet(newSetId)
})

const tabs = ['All', 'Unmemorized', 'Memorized']
const activeTab = ref('All')

const currentSet = computed(() =>
  setsStore.sets.find(s => s.id === Number(route.params.setId))
)

const filteredCards = computed(() => {
  if (activeTab.value === 'Memorized') {
    return cardsStore.cards.filter(c => c.mastered)
  }
  if (activeTab.value === 'Unmemorized') {
    return cardsStore.cards.filter(c => !c.mastered)
  }
  return cardsStore.cards
})

function startStudying() {
  router.push({ name: 'study', params: { setId: route.params.setId } })
}

function studyUnmemorizedOnly() {
  router.push({ name: 'study', params: { setId: route.params.setId }, query: { filter: 'unmemorized' } })
}
</script>

<template>
  <div class="flex flex-col h-full">
    <header class="shrink-0">
      <Topbar />
    </header>

    <main class="flex-1 flex flex-col min-h-0">

      <h2 class="font-heading font-bold text-3xl mb-4 shrink-0">
        {{ currentSet?.title ?? 'Set' }}
      </h2>

      <div class="flex border-b border-border mb-4 shrink-0">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="flex-1 pb-2 text-base font-semibold border-b-2 -mb-px"
          :class="activeTab === tab
            ? 'text-text border-blue'
            : 'text-text-muted border-transparent'"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="cardsStore.status === 'loading'" class="flex-1 flex items-center justify-center">
      </div>

      <div v-else-if="filteredCards.length === 0" class="flex-1 flex items-center justify-center text-text-muted">
        No cards in this category.
      </div>

      <div v-else class="flex-1 overflow-y-auto min-h-0">
        <div class="grid grid-cols-2 gap-2.5 content-start pb-4">
          <CardMin
            v-for="card in filteredCards"
            :key="card.id"
            :front="card.front"
            :back="card.back"
            :mastered="card.mastered"
          />
        </div>
      </div>

      <div class="flex flex-col gap-3 w-full pb-6 pt-3 shrink-0">
        <button type="button" class="bg-blue font-bold py-3 rounded-card text-text" @click="startStudying">
          Start Studying
        </button>
        <button type="button" class="bg-transparent font-bold py-3 border rounded-card border-border" @click="studyUnmemorizedOnly">
          Study only Unmemorized
        </button>
      </div>
    </main>
  </div>
</template>