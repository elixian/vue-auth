

<template>
  <div class="container">
    <Navbar />
    <button @click="incrementClick">increment</button>
    number : {{useStore.doubleCount}}
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useCounterStore } from './stores/counter';

const useStore = useCounterStore()

function incrementClick(){
  useStore.increment()
}
</script>