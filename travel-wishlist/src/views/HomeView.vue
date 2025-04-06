<script setup lang="ts">
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import type { Destination } from '../types/destination.ts';
import Wishlist from '../components/Wishlist.vue';
import ItemCard from '../components/ItemCard.vue';

const destinations: Ref<Destination[]> = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get<Destination[]>('http://localhost:5000/destinations');
    destinations.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="w-full flex flex-col">
    <wishlist :size="'one-row'" />
    <h1 class="mt-8 mb-2 px-8 font-bold text-2xl">Recommended destinations</h1>
    <div class="flex flex-col gap-4 px-8">
      <ItemCard v-for="destination of destinations" :item="destination" />
    </div>
  </div>
</template>

<style scoped>

</style>