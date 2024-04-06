<template>
    <div class="w-[30%] flex items-center ml-auto justify-end">
        <button class="p-3 rounded-full text-sm font-medium hover:bg-gray-50 px-4">
            Airbnb your home
        </button>
        <button class="p-3 rounded-full mr-1 hover:bg-gray-50">
            <img :src="GlobeIcon" class="w-5" />
            
        </button>
        <button class="flex gap-x-2 items-center border rounded-full ml-1 px-2 py-1 hover:shadow">
            <img :src="BarsIcon" class="w-6 h-6" />
            <img :src="UserIcon" class="w-10 h-10" />
            
        </button>
    </div>
</template>

<script lang="ts" setup>
import BarsIcon from '@/assets/svg/bars.svg';
import GlobeIcon from '@/assets/svg/globe.svg';
import UserIcon from '@/assets/svg/user.svg';
</script>