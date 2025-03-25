<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

const wishlistEntries = ref([
  { id: 1, name: 'Canyon Colorado' },
  { id: 2, name: 'Niagara Falls' },
  { id: 3, name: 'Statue of Liberty' },
])

const destinations = ref([])

onMounted(async() => {
  try{
    const response = await axios.get('http://localhost:5000/destinations');
    destinations.value = response.data;
  }catch(error){
    console.log(error)
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row w-full gap-4 px-10">
      <div v-for="item of wishlistEntries" class="flex flex-row w-full bg-indigo-400 p-4 rounded-xl">
        <img src="/travel.svg" alt="Destination Image" class="w-1/4">
        <div class="text-sm">
          <h3 class="font-display font-bold">Lorem Ipsum City</h3>
          <p class="card-description">
            A beautiful destination with stunning landscapes and a rich history. Perfect for travelers seeking adventure.
          </p>
          <div class="card-actions">
            <button class="wishlist-btn">Add to Wishlist</button>
            <button class="details-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div v-for="destination of destinations">
        {{ destination.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>