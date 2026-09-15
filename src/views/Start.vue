<script setup>
import Topbar from '@/components/Topbar.vue'
import heroImage from '@/assets/cat2.png'
import { useRouter } from 'vue-router'
const router = useRouter()

import { onMounted } from 'vue'
import { supabase } from '@/utils/supabase'

onMounted(async () => {
  const { data, error } = await supabase
    .from('sets')
    .select('*')

  if (error) {
    console.error('❌ Supabase error:', error)
    return
  }

  console.log('✅ Supabase connected!')
  console.log('📦 Sets:', data)
})

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <Topbar/>
        </header>

        <main class="flex-1 flex flex-col items-center text-center px-4">

            <div class="flex-1 flex flex-col items-center justify-center gap-6">
                <img :src="heroImage" alt="Hero" class="w-full">

                <div class="font-heading font-bold text-3xl">
                    Learn a little
                    <br>
                    every day
                </div> 
            </div>

            <div class="flex flex-col gap-3 w-full pb-6">
                <p class="text-text-muted">Pick up where you left off or explore your full word bank.</p>
                <button type="button" class="bg-blue font-bold py-3 rounded-card text-text " @click="router.push({name: 'sets'})">
                    Choose a Set
                </button>
                <button type="button" class="bg-transparent font-bold py-3 border rounded-card border-border">
                    View Vocabulary Bank
                </button>
            </div>
        </main>

    </div>

</template>