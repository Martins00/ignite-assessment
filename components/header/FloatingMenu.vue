<template>
    <div class="w-[56%] mx-auto flex gap-x-1 items-center mb-3 shadow-md border rounded-full transition-transform relative"
       :class="{ 'translate-y-[-64px] lg:w-[40%] max-xl:translate-x-[-20px] xl:w-[25%] justify-between py-[0.25rem] px-1': scrolledUp }"
    >
        <!-- small floating menu -->
        <template v-if="scrolledUp">
            <button class="text-sm ml-4 pl-2">Anywhere</button>
            <button class="border-x border-gray-300 px-4 text-sm font-">Any week</button>
            <button class="flex items-center">
                <span class="text-sm text-gray-500">Add guests</span>
                <img :src="MagnfyingGlassIcon" class="w-[40px] h-[40px] ml-4" />
            </button>
        </template>

        <!-- large floating menu -->
        <template v-else>
            <button class="flex flex-1 flex-col px-6 hover:rounded-full hover:bg-gray-100 font-medium py-[0.9rem] pl-8 text-xs" 
                @mouseover="removeWhereBorder(false)" @mouseleave="removeWhereBorder(true)"
            >
                <span>Where</span>
                <span class="font-normal text-gray-500">Search Destination</span>
            </button>

            <div class="w-[0.6px] h-8 bg-gray-300" :class="{ 'opacity-0' : !whereBorder }"></div>
            
            <div class="flex w-[35%] items-center">
                <button class="flex flex-1 flex-col px-4 hover:rounded-full font-medium border- hover:bg-gray-100 py-[0.9rem] text-xs" 
                    @mouseover="removeWhereAndCheckInBorder(false)" @mouseleave="removeWhereAndCheckInBorder(true)"
                >
                    <span>{{ experiences ? 'Date' : 'Check in' }}</span>
                    <span class="font-normal text-gray-500">Add dates</span>
                </button>

                <div class="w-[0.6px] h-8 bg-gray-300" :class="{ 'opacity-0' : !checkInBorder }"></div>

                <button
                    @mouseover="removeCheckInAndCheckOutBorder(false)" @mouseleave="removeCheckInAndCheckOutBorder(true)"
                    class="flex flex-1 flex-col px-4 hover:rounded-full font-medium border- transition-all hover:bg-gray-100 py-[0.9rem] text-xs"
                    :class="{ 'opacity-0 pointer-events-none': experiences }">
                    <span>Check out</span>
                    <span class="font-normal text-gray-500">Add dates</span>
                </button>
            </div>

            <div class="w-[0.6px] h-8 bg-gray-300" :class="{ 'opacity-0' : !checkOutBorder || experiences }"></div>

            <button class="flex flex-1 justify-between items-center hover:rounded-full font-medium pl-4 hover:bg-gray-100 py-[0.9rem] relative text-xs"
                @mouseover="removeCheckOutBorder(false)" @mouseleave="removeCheckOutBorder(true)"   
            >
                <div class="flex flex-col text-start mr-8">
                    <span>Who</span>
                    <span class="font-normal text-gray-500">Add guests</span>
                </div>
                <img :src="MagnfyingGlassIcon" alt="" class="w-14 h-14 absolute right-1" />

            </button>
        </template>
    </div>
</template>

<script lang="ts" setup>
import MagnfyingGlassIcon from '@/assets/icons/solid/magnifying-glass.svg';

defineProps<{
    scrolledUp: boolean,
    experiences: boolean
}>()

const whereBorder = ref(true);
const checkInBorder = ref(true);
const checkOutBorder = ref(true);

const removeWhereAndCheckInBorder = (value: boolean) => {
    whereBorder.value = value
    checkInBorder.value = value
};
const removeWhereBorder = (value: boolean) => {
    whereBorder.value = value
};
const removeCheckInAndCheckOutBorder = (value: boolean) => {
    checkInBorder.value = value
    checkOutBorder.value = value
};
const removeCheckOutBorder = (value: boolean) => {
    checkOutBorder.value = value
};
</script>