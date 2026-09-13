<script setup>
defineProps({
    front: {type: String, required: true},
    back: {type: String, required: true},
    mastered: {type: Boolean, required: false}
})

</script>

<template>
    <div class="rounded-card border border-border bg-surface p-3 flex flex-col justify-between gap-1.5">
        <div class="font-heading font-bold text-base text-text">{{ front }}</div>
        <div class="h-px bg-border"></div>
        <div class="text-base text-text-muted">{{ back }}</div>
    </div>

</template>