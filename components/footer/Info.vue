<template>
  <div class="w-full text-sm">
    <div class="container mx-auto py-6 grid lg:flex items-center justify-center gap-x-2 border-t">
      <div class="flex gap-x-2 mx-auto w-fit">
        <span>© 2024 Airbnb, Inc. </span>
        <span class="leading-none font-bold max-lg:hidden">.</span>
      </div>

      <nav class="flex items-center flex-grow flex-wrap justify-center">
        <div class="flex gap-x-2">
          <span class="hover:underline cursor-pointer">Terms</span>
          <span class="leading-none font-bold">.</span>
          <span class="hover:underline cursor-pointer">Sitemap</span>
          <span class="leading-none font-bold">.</span>
          <span class="hover:underline cursor-pointer">Privacy</span>
          <span class="leading-none font-bold">.</span>
          <span class="flex items-center gap-x-2">
            <span class="hover:underline cursor-pointer">Your Privacy Choices </span>
            <img :src="CheckIcon" alt="" class="w-5 h-5" />
          </span>
        </div>

        <div class="flex gap-x-4 justify-center items-center lg:ml-auto max-lg:basis-full">
          <span class="flex items-center gap-x-1">
            <img :src="GlobeIcon" alt="" class="w-5 h-5" />
            <span class="hover:underline cursor-pointer">English (US)</span>
          </span>
          <span class="flex gap-x-1">
            <span class="font-bold">$</span>
            <span class="hover:underline cursor-pointer">USD</span>
          </span>
          <div class="flex gap-x-2">
            <nuxt-link to="/">
              <img :src="FacebookIcon" alt="" class="w-5 h-5" />
            </nuxt-link>
            <nuxt-link to="/">
              <img :src="InstagramIcon" alt="" class="w-5 h-5" />
            </nuxt-link>
            <nuxt-link to="/">
              <img :src="TwitterIcon" alt="" class="w-5 h-5" />
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FacebookIcon from "@/assets/svg/facebook.svg";
import InstagramIcon from "@/assets/svg/instagram.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import CheckIcon from "@/assets/svg/check.svg";
import GlobeIcon from "@/assets/svg/globe.svg";
</script>
