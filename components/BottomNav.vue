<template>
    <nav class="sm:hidden bg-white fixed bottom-0 w-full flex justify-center items-center gap-x-12 p-3 transition-all duration-300" :class="{ 'translate-y-20': scrolledUp }">
        <nuxt-link to="#" class="flex flex-col items-center text-xs text-[#ff385c]">
            
            <img :src="MagnfyingGlassIcon" alt="" class="h-7" />
            <span>Explore</span>
        </nuxt-link>
        <nuxt-link to="#" class="flex flex-col items-center text-xs text-[#8f8f8f]">
            <img :src="HeartIcon" alt="" class="w-6 h-6" />
            <span>Wishlists</span>
        </nuxt-link>
        <nuxt-link to="#" class="flex flex-col items-center text-xs text-[#8f8f8f]">
            <img :src="UserIcon" alt="" class="w-8 h-7" fill="#8f8f8f" />
            <span>Log in</span>
        </nuxt-link>
    </nav>
</template>

<script lang="ts" setup>
import MagnfyingGlassIcon from '@/assets/icons/outline/magnifying-glass.svg';
import HeartIcon from '@/assets/svg/heart.svg';
import UserIcon from '@/assets/svg/user.svg';
const scrolledUp = ref(false);
let prevScrollY = 0;

onMounted(() => {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrolledUp.value = currentScrollY > prevScrollY;
        prevScrollY = currentScrollY;
    });
});
</script>


