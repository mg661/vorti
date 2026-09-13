<script setup>
defineProps({
    current: {type: Number, required: true},
    total: {type: Number, required: true}
})
</script>

<template>
  <div class="flex items-center gap-2.5 py-4">

    <div class="flex-1 h-2 rounded-full bg-surface-2 overflow-hidden">
         <div
        class="h-full rounded-full bg-blue"
        :style="{ width: `${(current / total) * 100}%` }"
        ></div>
    </div>

    <div class="font-heading font-bold text-base text-text-muted whitespace-nowrap">
      {{ current }}/{{ total }}
    </div>

  </div>
</template>