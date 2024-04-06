<template>
    <div class="text-base group cursor-pointer">
        <div class="relative">
            <div ref="container"
                class="aspect-[20/19] rounded-2xl snap-mandatory snap-x flex overflow-auto scrollbar-hide">
                <div class="h-full w-full snap-start flex-shrink-0 bg-gray-200">
                    <img loading="lazy" class="h-full w-full object-cover" :src="selectedImage" />
                </div>
            </div>

            <div class="absolute top-0 right-0 md:left-0 md:h-full md:w-full p-3 grid md:grid-rows-3">
                <div class="flex justify-end">
                    <img v-if="liked" :src="solidHeart" alt="SVG Icon" class="h-[24px] text-white fill-black/40 aspect-square mt-[0.15rem]" @click="toggleLike"/>
                    <img v-else :src="lineHeart" alt="SVG Icon" class="h-[24px] text-white fill-black/40 aspect-square mt-[0.15rem]" @click="toggleLike"/>
                </div>

                <div class="justify-between items-center opacity-0 group-hover:opacity-100 duration-150 hidden md:flex">
                    <div v-if="currentIndex > 0" class="mr-auto  p-2 bg-white/80 hover:bg-white hover:scale-105 active:scale-100 duration-200 rounded-full"
                        @click="goTo('back')">
                        <img :src="chevronLeftSvg" alt="SVG Icon" class="h-[20px] aspect-square"/>
                    </div>

                    <div v-if="currentIndex < props.product!.images.length" class="ml-auto p-2 bg-white/80 hover:bg-white hover:scale-105 active:scale-100 duration-200 rounded-full"
                        @click="goTo('next')">
                        <img :src="chevronRightSvg" alt="SVG Icon" class="h-[20px] aspect-square"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-3 items-start select-none">
            <div>
                <p class="font-medium">{{ props.product.title }}</p>
                <p class="text-gray-500 font-light">Stock: {{ props.product.stock }}</p>
                <p class="text-gray-500 font-light">Brand: {{ props.product.brand }}</p>
                <p class="flex gap-x-1 items-center">
                 <span>${{ props.product.price }}</span> 
                </p>
            </div>

            <div class="flex gap-2 items-center">
                <img :src="starSvg" alt="star" class="h-[15px] aspect-square"/>
                {{ props.product.rating }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import solidHeart from '@/assets/icons/solid/heart.svg'
import lineHeart from '@/assets/icons/outline/heart.svg'
import chevronLeftSvg from '@/assets/icons/outline/chevron-left.svg'
import chevronRightSvg from '@/assets/icons/outline/chevron-right.svg'
import starSvg from '@/assets/icons/solid/star.svg'
import type { Product } from '@/models/product'

const props = defineProps<{
    product: Product
}>();

// like product
const liked = ref(false);
function toggleLike() {
    liked.value = !liked.value
}

// Image toggle
let currentIndex = ref(0);
const container = ref();
let selectedImage = ref(props.product?.images[currentIndex.value])

function goTo(direction: string) {
    if(direction == 'next' && currentIndex.value < props.product!.images.length) {
        currentIndex.value = currentIndex.value + 1 
    }
    else if(direction == 'back' && currentIndex.value !== 0) {
        currentIndex.value = currentIndex.value - 1 
    }
}

watch(currentIndex, (newValue) => {
    selectedImage.value = props.product!.images[newValue]
})
</script>
