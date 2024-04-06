<template>
    <button type="button" :class="[backgroundColor ? `bg-${backgroundColor}` : 'bg-black', textColor ? `text-${textColor}` : 'text-white', 'rounded-md  px-3.5 py-2.5 text-sm font-semibold shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">{{ props.text ?? 'Continue' }}</button>
</template>

<script setup lang="ts">
    const props = defineProps < {
        text?: string
        textColor?: string
        backgroundColor?: string
    } > ();
</script>
  