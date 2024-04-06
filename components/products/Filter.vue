<template>
    <div class="top-[81px] sticky z-50 bg-white shadow-md">
        <div class="container mx-auto flex gap-6">
            <div class="relative flex-1 overflow-auto">
                <div class="flex gap-x-4 rounded-full py-4 px-6 my-4 items-center shadow-lg lg:hidden">
                    <img :src="searchIcon" alt="star" class="h-6" />
                    <span>
                        <p class="text-lg font-semibold">Anywhere</p>
                        <p class="flex items-center gap-x-2 text-sm text-gray-500">
                            <span>Any week</span>
                            <svg viewBox="0 0 2 2" class="h-2 w-2 fill-current">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <span>Add guests</span>
                        </p>
                    </span>
                </div>


                <div ref="scrollContent"
                    class="scrollbar-hide overflow-auto lg:overflow-hidden flex gap-8 items-center">
                    <button v-for="(item, index) in items" :key="item.image" ref="target"
                        class="group cursor-pointer inline-flex flex-col gap-2 items-center py-4 relative"
                        @click="setSelectedIndex(index)">
                        <img :class="[selectedIndex == index ? 'opacity-100' : 'opacity-[0.6425339366515838] group-hover:opacity-100']"
                            v-bind="{ src: item.image }" class="h-[24px] w-[24px]">
                        <span
                            :class="[selectedIndex == index ? 'text-black' : 'text-[#717171] group-hover:text-black']"
                            class="text-xs whitespace-nowrap">{{ item.title }}</span>

                        <!-- Border effect -->
                        <div :class="[selectedIndex == index ? 'bg-black' : 'group-hover:bg-gray-300']"
                            class="absolute bottom-0 left-0 w-full h-[2px]" />
                    </button>
                </div>
                <div v-if="!arrivedState.left"
                    class="absolute bg-gradient-to-r from-white via-white to-transparent pr-[3rem] top-0 h-full left-0 hidden lg:flex items-center"
                    @click="goTo('back')">
                    <button class="p-2 text-xs bg-white rounded-full inline-flex border">
                        <img :src="chevronLeftSvg" alt="star" class="h-[12px] aspect-square" />
                    </button>
                </div>

                <!-- Right action button -->
                <div v-if="!arrivedState.right"
                    class="absolute bg-gradient-to-l from-white via-white to-transparent pl-[3rem] top-0 h-full right-0 hidden lg:flex items-center"
                    @click="goTo('next')">
                    <button class="p-2 text-xs bg-white rounded-full inline-flex border">
                        <img :src="chevronRightSvg" alt="star" class="h-[12px] aspect-square" />
                    </button>
                </div>
            </div>

            <!-- Actions -->
            <div class="lg:flex items-center hidden">
                <button class="text-xs border rounded-xl p-3 flex items-center gap-2">
                    <span class="h-[14px] w-[14px]" v-html="adjustmentIcon" />
                    <span>Filters</span>
                </button>
            </div>

            <div class="lg:flex items-center hidden">
                <button class="text-xs border rounded-xl p-[0.65rem] flex items-center gap-2">
                    <span>Display total before taxes </span>
                    <CommonSwitch v-model="beforeTaxes" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRefHistory, get, set, useScroll } from '@vueuse/core'
import adjustmentIcon from '@/assets/svg/filters/adjustment.svg?raw'
import chevronLeftSvg from '@/assets/icons/outline/chevron-left.svg'
import chevronRightSvg from '@/assets/icons/outline/chevron-right.svg'
import searchIcon from '@/assets/svg/forms/search-icon.svg'

const { $gsap } = useNuxtApp()

const props = defineProps<{
    items: any
}>();


const beforeTaxes = ref(true)
let selectedIndex = ref(0)


function setSelectedIndex(index: number) {
    selectedIndex.value = index
}


const scrollContent = ref()
const { arrivedState } = useScroll(scrollContent, { behavior: 'smooth' })

const currentValue = ref(0)

const goTo = (direction: 'next' | 'back') => {

}
</script>