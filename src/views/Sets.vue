<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSetsStore } from '@/stores/sets'
import SetCard from '@/components/SetCard.vue'
import Topbar from '@/components/Topbar.vue'

const store = useSetsStore()
const tabs = ['All', 'Mastered', 'Not Mastered']
const activeTab = ref('All')

const sets = [
  {
    id: 1,
    title: 'Spanish Basics',
    description: 'Everyday greetings, numbers, and common phrases for beginners.',
    totalCards: 24,
    masteredCards: 12,
  },
  {
    id: 2,
    title: 'Travel Phrases',
    description: 'Essential travel vocabulary for airports, hotels, restaurants, directions, shopping, and everyday situations abroad.',
    totalCards: 18,
    masteredCards: 8,
  },
  {
    id: 3,
    title: 'Business English',
    description: 'Meetings, emails, and negotiation terms for the workplace.',
    totalCards: 20,
    masteredCards: 20,
  },
  {
    id: 4,
    title: 'Food & Dining',
    description: 'Menus, ingredients, and ordering at restaurants with ease.',
    totalCards: 16,
    masteredCards: 3,
  },
]

onMounted(() => {
  store.loadSets()
})

const filteredSets = computed(() => {
  if (activeTab.value === 'Mastered') return store.masteredSets
  if (activeTab.value === 'Not Mastered') return store.notMasteredSets
  return store.sets
})

</script>



<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <Topbar/>
        </header>
    
        <main class="flex-1">
            <h2 class="font-heading font-bold text-3xl mb-4">Your Sets</h2>
            <div class="flex border-b border-border mb-4">
                <button
                    v-for="tab in tabs"
                    :key="tab"
                    type="button"
                    class="flex-1 pb-2 text-base font-semibold border-b-2 -mb-px"
                    :class="activeTab === tab
                        ? 'text-text border-blue'
                        : 'text-text-muted border-transparent'"
                        @click="activeTab=tab"
                >
            {{ tab }}
            </button>
            </div>

             <div v-if="store.status === 'loading'">Ładowanie...</div>

            <SetCard
            v-for="set in filteredSets"
            :key="set.id"
            :title="set.title"
            :description="set.description"
            :total-cards="set.totalCards"
            :mastered-cards="set.masteredCards"
            class="mb-3"
            @click="$router.push({ name: 'cards', params: { setId: set.id } })"
            />
        </main>
    </div>
</template>

<style scoped>
</style>