<script setup lang="ts">
</script>

<template>
  <nav class="w-full flex flex-row justify-between px-10 py-4 mb-10 border-b border-indigo-900">
    <div class="text-4xl font-bold font-display">
      Travel Wishlist
    </div>
    <div class="flex flex-row justify-between w-1/3 items-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/wishlist">Wishlist</RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>

  </nav>
  <main class="flex w-full">
    <RouterView />
  </main>
</template>

<style>

</style>
