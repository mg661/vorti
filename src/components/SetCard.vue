<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
    title: {type: String, required: true},
    description: {type: String, required: false},
    totalCards: {type: Number, required: true},
    masteredCards: {type: Number, required: true}
})
</script>
<template>
    <div class="bg-surface border border-border rounded-card p-4">
        <div class="flex justify-between items-start gap-2 mb-1">
            <div class="text-xl font-heading font-bold text-text">{{ title }}</div>
            <div class="font-bold text-excellent bg-excellent/10 px-2 py-1 rounded-full whitespace-nowrap">{{ masteredCards }}/{{ totalCards }} mastered</div>
        </div>
    
        <p class="text-base text-text-muted mb-4">{{ description }}</p>

        <!-- <div class="flex gap-2">
            <button type="button" class="flex-1 py-2 rounded-card bg-blue text-text font-bold text-sm">Study All</button>
            <button type="button" class="flex-1 py-2 rounded-card bg-surface-2 border border-border text-text font-bold text-sm">Study Non-Mastered</button>
        </div> -->
    </div>
</template>