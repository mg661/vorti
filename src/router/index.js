import { createRouter, createWebHistory} from "vue-router"
import { useAuthStore } from '@/stores/auth'

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
        component: Start,
        meta: { requiresAuth: true }
    },
     {
        path: '/sets',
        name: 'sets',
        component: Sets,
        meta: { requiresAuth: true }
    },
     {
        path: '/sets/:setId/cards',
        name: 'cards',
        component: Cards,
        meta: { requiresAuth: true }
    },
     {
          path: '/study/:setId',
        name: 'study',
        component: Study,
        meta: { requiresAuth: true }
    },
     {
        path: '/complete',
        name: 'complete',
        component: Complete,
        meta: { requiresAuth: true }
    },
     {
        path: '/words-bank',
        name: 'words-bank',
        component: WordsBank,
        meta: { requiresAuth: true }
    },
     {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    },
     {
        path: '/signin',
        name: 'signin',
        component: SignIn,
        meta: { requiresGuest: true }
    }
]

const router = createRouter({
    history: createWebHistory('/vorti'),
    routes
})

router.beforeEach((to) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return { name: 'signin' }
    }

    if (to.meta.requiresGuest && authStore.isAuthenticated) {
        return { name: 'start' }
    }
})

export default router

// Ważne: ten guard zadziała poprawnie tylko dlatego, że w Twoim main.js czekasz na authStore.initAuth() przed app.mount() — dzięki temu authStore.isAuthenticated ma już prawidłową wartość zanim router zacznie nawigować. Nic tu nie musisz zmieniać, ale warto rozumieć tę zależność — gdybyś kiedyś przeniósł initAuth() gdzieś indziej (np. jako async po mount), guard mógłby złapać stan przejściowy i niepotrzebnie przekierować zalogowanego usera na signin.