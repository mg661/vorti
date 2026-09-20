<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true }
})

const percent = computed(() =>
  props.total > 0 ? Math.min(100, (props.current / props.total) * 100) : 0
)
</script>

<template>
  <div class="flex items-center gap-2.5 py-4">
    <div class="flex-1 h-2 rounded-full bg-surface-2 overflow-hidden">
      <div
        class="h-full rounded-full bg-blue transition-[width] duration-500 ease-out motion-reduce:transition-none"
        :style="{ width: `${percent}%` }"
      ></div>
    </div>

    <div class="font-heading font-bold text-base text-text-muted whitespace-nowrap">
      {{ current }}/{{ total }}
    </div>
  </div>
</template>