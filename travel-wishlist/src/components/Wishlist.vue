<script setup lang="ts">

import { useCounterStore } from '../stores/wishlist.store.ts';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  size?: 'one-row' | 'full'
}>(), {
  size: 'one-row'
});

const visibleItems = computed(() =>
  props.size === 'one-row'
    ? wishlistStore.wishlistedDestinations.slice(0, 3)
    : wishlistStore.wishlistedDestinations
)

const wishlistStore = useCounterStore();
</script>

<template>
  <h1 class="mt-8 mb-2 px-8 font-bold text-2xl">Your Wishlist ({{visibleItems.length}}/{{wishlistStore.count}})</h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
    <div
      v-if="wishlistStore.count === 0"
      class="col-span-3 flex w-full bg-indigo-400 p-4 rounded-xl h-36 justify-center items-center"
    >
      <div>Start planning your journeys by adding travel destinations to your wishlist!</div>
    </div>

    <div
      v-for="item in visibleItems"
      :key="item.id"
      class="flex flex-row bg-indigo-400 p-4 rounded-xl h-36"
    >
      <img src="/travel.svg" alt="Destination Image" class="w-full h-20 object-contain mb-2">
      <div class="text-sm">
        <h3 class="font-display font-bold">{{ item.name }}</h3>
        <p class="card-description line-clamp-2">
          {{ item.description }}
        </p>
        <div class="card-actions mt-2">
          <button class="details-btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>