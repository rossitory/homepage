<template>
  <div class="flex flex-col items-center text-center p-4">
    <img :src="image" alt="Icon" class="h-16 w-16 mb-4">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-base">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const { title, image, text } = props;
</script>

<style scoped>
</style>
