<template>
    <div class="-mt-20 flex w-full h-full items-center justify-center">
        <span class="relative flex items-center justify-center h-5 w-5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-red-400"></span>
        </span>
        <div v-if="showTitle" class="mt-3 mb-12">
            <p class="text-xxs font-medium text-gray-500 group-hover:text-gray-700">{{ title }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string,
        showTitle?: boolean,
    }>(),
    {
        title: 'loading...',
        showTitle: false,
    }
)
</script>
