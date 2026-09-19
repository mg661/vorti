<script setup>
import Topbar from '@/components/Topbar.vue'
import heroImage from '@/assets/cat2.png'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

```vue
<template>
    <div class="h-full flex flex-col overflow-hidden">
        <header class="shrink-0">
            <Topbar />
        </header>

        <main class="flex-1 min-h-0 flex flex-col items-center text-center">

            <div class="flex-1 min-h-0 w-full flex flex-col items-center justify-center gap-6">
                <img
                    :src="heroImage"
                    alt="Hero"
                    class="w-full max-h-full object-contain"
                >

                <div class="font-heading font-bold text-3xl">
                    Learn a little
                    <br>
                    every day
                </div>
            </div>

            <div class="shrink-0 flex flex-col gap-3 w-full pb-6">
                <p class="text-text-muted">
                    Pick up where you left off or explore your full word bank.
                </p>

                <button
                    type="button"
                    class="bg-blue font-bold py-3 rounded-card text-text"
                    @click="router.push({ name: 'sets' })"
                >
                    Choose a Set
                </button>

                <button
                    type="button"
                    class="bg-transparent font-bold py-3 border rounded-card border-border"
                >
                    View Vocabulary Bank
                </button>
            </div>

        </main>
    </div>
</template>