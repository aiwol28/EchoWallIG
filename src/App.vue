<template>
  <main class="bg-gray-800 min-h-[100vh] flex flex-col justify-between">
    <div class="mx-auto sm:px-28 px-4 py-4 w-fit z-20">
      <Brand />
      <UploadZip />
      <TabsNavigation />
    </div>
    <div class="sm:text-sm text-xs tracking-wide text-white bg-gray-700 text-center sm:py-4 py-2">
      © 2025 EchoWallIG
    </div>
  </main>
</template>

<script setup>
import Brand from './components/Brand.vue';
import TabsNavigation from './components/TabsNavigation.vue';
import UploadZip from './components/UploadZip.vue';
</script>

<style scoped></style>
