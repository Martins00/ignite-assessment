<template>
    <div class="flex-1 flex justify-center gap-x-8 transition-all duration-300"
        :class="{ '-translate-y-20 scale-0': scrolledUp }"
    >
        <button @click="switchOptions(false)" :class="{ 'font-semibold': !experiences }">Stays</button>
        <button @click="switchOptions(true)" :class="{ 'font-semibold': experiences }">Experiences</button>
        <nuxt-link to="/">Online Experiences</nuxt-link>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    scrolledUp: boolean,
    experiences: boolean
}>()
const emit = defineEmits(['switchOptions'])

const switchOptions = (value: boolean) => {
    emit('switchOptions', value)
};
</script>