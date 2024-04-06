<template>
    <div class="container mx-auto mt-8 px-1 grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      <div v-for="option in props.options" class="flex flex-col text-sm cursor-pointer">
        <span class="font-medium">{{ option.location }}</span>
        <span class="font-light text-[#222222]">{{ option.rental }}</span>
      </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps < {
        options?: any
    } > ();
</script>