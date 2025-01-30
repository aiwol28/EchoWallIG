<template>
  <main class="bg-gray-800 min-h-[100vh]">
    <div class="container mx-auto p-4 w-fit z-20">
      <Brand />
      <UploadZip />
      <TabsNavigation />
    </div>
  </main>
</template>

<script setup>
import Brand from './components/Brand.vue';
import TabsNavigation from './components/TabsNavigation.vue';
import UploadZip from './components/UploadZip.vue';
</script>

<style scoped></style>
