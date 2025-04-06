import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import type { Destination } from '../types/destination.ts';

export const useCounterStore = defineStore('counter', () => {
    const wishlistedDestinations: Ref<Destination[]> = ref([])

    const count = computed(() => wishlistedDestinations.value.length)

    function addToWishlist(destination: Destination) {
        wishlistedDestinations.value.push(destination);
    }

    function removeFromWishlist(id: number) {
        wishlistedDestinations.value.splice(id, 1);
    }

    return {count, wishlistedDestinations, addToWishlist, removeFromWishlist}
})