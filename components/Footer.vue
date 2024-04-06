<template>
  <footer class="bg-gray-100 border-t lg:pt-4">
    <nav class="container mx-auto lg:flex gap-x-56 justify-start mb-12 text-[#222222]">
      <FooterNavigationLinks v-for="(items, title) in footerNavigationSections" :key="title" :items="items"
        :title="title" />
    </nav>
    <FooterInfo />
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const footerNavigationSections = ref({
  Support: [
    'Help Center',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighborhood concern',
  ],
Hosting: [
    'Airbnb your home',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
    'Airbnb-friendly apartments',
    'Join a free Hosting class',
  ],
  Airbnb: [
    'Newsroom',
    'New features',
    'Careers',
    'Investors',
    'Gift cards',
    'Airbnb.org emergency stays'
  ],
});

</script>