import { createRouter, createWebHistory} from "vue-router"

import Start from '@/views/Start.vue'
import Sets from '@/views/Sets.vue'
import Cards from '@/views/Cards.vue'
import Study from '@/views/Study.vue'
import Complete from '@/views/Complete.vue'
import WordsBank from '@/views/WordsBank.vue'
import Profile from '@/views/Profile.vue'
import SignIn from '@/views/SignIn.vue'


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
        path: '/sets/:setId/cards',
        name: 'cards',
        component: Cards
    },
     {
          path: '/study/:setId',
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
    },
     {
        path: '/signin',
        name: 'signin',
        component: SignIn
    }
]

const router = createRouter({
    history: createWebHistory('/vorti'),
    routes
})

export default router