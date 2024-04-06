<template>
    <header class="fixed top-0 w-full z-50 bg-white border-b max-lg:hidden transition-all duration-1000" :class="{ 'h-[5.4rem]' : scrolledUp }">
      <nav class="container mx-auto flex items-center">
        <!-- Logo -->
        <div class="w-[30%] h-[80px] flex items-center" v-html="fullLogo" />

        <!-- Navigation -->
        <HeaderNav :scrolled-up="scrolledUp" :experiences="experiences" @switchOptions="switchOptions" />

        <!-- Actions -->
        <HeaderActionMenu />
      </nav>
      
      <HeaderFloatingMenu :scrolled-up="scrolledUp" :experiences="experiences" />
    </header>
</template>
  
<script lang="ts" setup>
import fullLogo from '@/assets/svg/full-logo.svg?raw'

const experiences = ref(false)

const scrolledUp = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolledUp.value = window.scrollY > 0;
  });
});

const switchOptions = (value: boolean) => {
  experiences.value = value;
};
</script>
  