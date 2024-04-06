<template>
    <div>
        <label :for="props.for" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="relative mt-2 rounded-xl shadow-sm">
            <div v-if="props.withIcon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <img :src="searchIcon" alt="star" class="h-6"/>
            </div>
            <input type="email" name="email" id="email"
                class="block w-full rounded-3xl border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com" />
        </div>
    </div>
</template>

<script setup lang="ts">
import searchIcon from '@/assets/svg/forms/search-icon.svg'

const props = withDefaults(
    defineProps<{
        withIcon?: boolean
        for?: string
    }>(),
    {
        withIcon: true,
        for: 'search'
    }
)
</script>