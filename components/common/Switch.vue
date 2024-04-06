<template>
    <Switch v-model="enabled"
        :class="[enabled ? 'bg-black' : 'bg-gray-200', 'relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2']">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true"
            :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
    </Switch>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>