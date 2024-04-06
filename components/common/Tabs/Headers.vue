<template>
    <div class="container">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select id="tabs" name="tabs"
                class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm">
                <option v-for="(tab, index) in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block border-b border-gray-200">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8 cursor-pointer overflow-auto" aria-label="Tabs">
                    <a v-for="(tab, index) in props.tabs" :key="tab.name" :href="tab.href" @click="switchTab(tab, index)"
                        class="cursor pointer transition-all duration-300"
                        :class="[tab.current ? 'border-black text-black' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']"
                        :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps < {
  tabs?: any
} > ();

const previousTabIndex = ref(0);

const switchTab = (tab: any, index: number) => {
    props.tabs[previousTabIndex.value].current = false;
    props.tabs[index].current = true;
    previousTabIndex.value = index;
};
</script>