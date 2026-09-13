<script setup>
import { ref } from 'vue'

defineProps({
    front: { type: String, required: true },
    back: { type: String, required: true}
})

const isFlipped = ref(false)

function toggleFlip(){
    isFlipped.value = !isFlipped.value
}

</script>

<template>
    <div
        class="flex-1 rounded-card border border-border bg-linear-to-br from-surface-2 to-surface flex flex-col items-center justify-center gap-2.5 relative cursor-pointer select-none"
        @click="toggleFlip"
        >
        <div class ="font-heading font-bold text-4xl tracking-tight text-text">
            {{ isFlipped ? back : front }}
        </div>
    </div>

</template>
