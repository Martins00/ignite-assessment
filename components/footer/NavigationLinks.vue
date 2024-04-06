<template>
    <ul class="py-8" :class="title !== 'Support' ? 'max-lg:border-t' : ''">
        <h6 class="font-semibold text-">{{ title }}</h6>
        <li v-for="item in items" :key="item" class="my-4 hover:underline text-sm">
        <nuxt-link to="/">{{ item }}</nuxt-link>
        </li>
    </ul> 
  </template>
  
<script lang="ts" setup>
defineProps<{
    title: string,
    items: string[];
}>()
</script>
  