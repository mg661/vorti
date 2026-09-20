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
            <div class="font-bold text-excellent bg-excellent/10 px-2 py-1 rounded-full whitespace-nowrap">{{ masteredCards }}/{{ totalCards }}</div>
        </div>
    
        <p class="text-base text-text-muted mb-4">{{ description }}</p>

    </div>
</template>