<script setup>
import {ref} from 'vue'
import Topbar from '@/components/Topbar.vue'
import CardMin from '@/components/CardMin.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const tabs = ['All', 'Unmemorized', 'Memorized']
const activeTab = ref('All')

const cards = [
  {
    id: 1,
    front: 'Hello',
    back: 'Hola',
    mastered: true,
  },
  {
    id: 2,
    front: 'Goodbye',
    back: 'Adiós',
    mastered: true,
  },
  {
    id: 3,
    front: 'Please',
    back: 'Por favor',
    mastered: true,
  },
  {
    id: 4,
    front: 'Thank you',
    back: 'Gracias',
    mastered: false,
  },
  {
    id: 5,
    front: 'Yes',
    back: 'Sí',
    mastered: true,
  },
  {
    id: 6,
    front: 'No',
    back: 'No',
    mastered: true,
  },
  {
    id: 7,
    front: 'Good morning',
    back: 'Buenos días',
    mastered: false,
  },
  {
    id: 8,
    front: 'Good night',
    back: 'Buenas noches',
    mastered: false,
  },
  {
    id: 9,
    front: 'How are you?',
    back: '¿Cómo estás?',
    mastered: false,
  },
  {
    id: 10,
    front: 'One',
    back: 'Uno',
    mastered: true,
  },
  {
    id: 11,
    front: 'Two',
    back: 'Dos',
    mastered: true,
  },
  {
    id: 12,
    front: 'Three',
    back: 'Tres',
    mastered: false,
  },
    {
    id: 13,
    front: 'Four',
    back: 'Cuatro',
    mastered: false,
  },
  {
    id: 14,
    front: 'Five',
    back: 'Cinco',
    mastered: false,
  },
  {
    id: 15,
    front: 'Water',
    back: 'Agua',
    mastered: true,
  },
  {
    id: 16,
    front: 'Bread',
    back: 'Pan',
    mastered: true,
  },
  {
    id: 17,
    front: 'House',
    back: 'Casa',
    mastered: false,
  },
  {
    id: 18,
    front: 'Friend',
    back: 'Amigo',
    mastered: true,
  },
  {
    id: 19,
    front: 'I love you',
    back: 'Te quiero',
    mastered: false,
  },
  {
    id: 20,
    front: 'Excuse me',
    back: 'Disculpe',
    mastered: false,
  }
]
</script>

<template>
    <div class="flex flex-col h-screen">
        <header class="shrink-0">
            <Topbar/>
        </header>

        <main class="flex-1 flex flex-col min-h-0">
            <h2 class="font-heading font-bold text-3xl mb-4 shrink-0">Set title</h2>

            <div class="flex border-b border-border mb-4 shrink-0">
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

            <div class="flex-1 overflow-y-auto min-h-0">
                <div class="grid grid-cols-2 gap-2.5 content-start pb-4">
                    <CardMin
                        v-for="card in cards"
                        :key="card.id"
                        :front="card.front"
                        :back="card.back"
                        :mastered="card.mastered"
                    />
                </div>
            </div>

            <div class="flex flex-col gap-3 w-full pb-6 pt-3 shrink-0">
                <button type="button" class="bg-blue font-bold py-3 rounded-card text-text"  @click="router.push({ name: 'study' })">
                    Start Studying
                </button>
                <button type="button" class="bg-transparent font-bold py-3 border rounded-card border-border"  @click="router.push({ name: 'study' })">
                    Study only Unmemorized
                </button>
            </div>
        </main>
    </div>
</template>