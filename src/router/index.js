import { createRouter, createWebHistory} from "vue-router"

import Start from '@/views/Start.vue'
import Sets from '@/views/Sets.vue'
import Cards from '@/views/Cards.vue'
import Study from '@/views/Study.vue'
import Complete from '@/views/Complete.vue'
import WordsBank from '@/views/WordsBank.vue'
import Profile from '@/views/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'start',
        component: Start
    },
     {
        path: '/sets',
        name: 'sets',
        component: Sets
    },
     {
        path: '/cards',
        name: 'cards',
        component: Cards
    },
     {
        path: '/study',
        name: 'study',
        component: Study
    },
     {
        path: '/complete',
        name: 'complete',
        component: Complete
    },
     {
        path: '/words-bank',
        name: 'words-bank',
        component: WordsBank
    },
     {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router