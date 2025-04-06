<script setup lang="ts">
import type { Destination } from '../types/destination.ts';
import { useCounterStore } from '../stores/wishlist.store.ts';

const props = defineProps<{
  item: Destination
}>()

const wishlistStore = useCounterStore();

function addToWishlist() {
  wishlistStore.addToWishlist(props.item);
}

</script>

<template>
  <div class="w-full bg-indigo-950 text-white rounded-xl p-4 h-36">
    {{props.item.name}} | {{props.item.country}}<br/>
    <p>{{props.item.description}}</p>
    <br/>

    <button @click="addToWishlist">Add to wishlist</button>
  </div>
</template>

<style scoped>
p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>