<script setup>
import { Home, User } from 'lucide-vue-next'
</script>
<template>
    <div class="flex justify-between">
        <div class="w-12 h-12 rounded-card bg-surface border border-border flex items-center justify-center">
            <Home class="w-6 h-6 text-text"/>
        </div>

        <div class="w-12 h-12 rounded-card bg-blue border border-border flex items-center justify-center">
            <User class="w-6 h-6 text-text"/>
        </div>

    </div>
</template>